/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const readingTime = require("reading-time")
const { createContentDigest } = require(`gatsby-core-utils`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  // BlogPost is defined in gatsby-theme-blog-core
  const { createTypes } = actions
  createTypes(`
    type ReadingTime implements Node {
      text: String!
      blogPostID: ID!
      blogPostTitle: String!
      id: ID!
    }
    `)
}

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = async ({
  node,
  getNode,
  createNodeId,
  actions,
}) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    // somehow this works for Mdx nodes and not for MdxBlogPost nodes
    const rTime = readingTime(node.internal.content)
    createNodeField({
      node,
      name: `readingTime`,
      value: rTime,
    })
  }

  if (node.internal.type === `MdxBlogPost`) {

    // couldnt do createNodeField for MdxBlogPost / BlogPost as those types doesnt include `fields`
    // hence this reversed approach where we create a readingTime node which maps with blog post id
    const pNode = getNode(node.parent)
    const rTime = readingTime(pNode.internal.content)
    const readingTimeId = createNodeId(`${node.id} >>> ReadingTime`)

    await createNode({
      id: readingTimeId,
      blogPostID: node.id,
      blogPostTitle: node.title,
      text: rTime.text,
      parent: node.id,
      internal: {
        type: "ReadingTime",
        contentDigest: createContentDigest(rTime.text),
      },
    })
  }
}

const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/components/post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(`
    {
      postsRemark: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
    })
  })
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
