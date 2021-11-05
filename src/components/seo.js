/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              name
              url
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  let twitterLink = ""
  let githubLink = ""
  try {
    twitterLink = site.siteMetadata.social.filter(s => {
      return s.name.toLowerCase() === "twitter"
    })[0].url
  } catch (err) {
    console.log("Unable to parse twitter link", err)
    throw err
  }

  try {
    githubLink = site.siteMetadata.social.filter(s => {
      return s.name.toLowerCase() === "github"
    })[0].url
  } catch (err) {
    console.log("Unable to parse github link", err)
    throw err
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
      ].concat(meta)}
      link={[
        {
          href: twitterLink,
          rel: "me",
        },
        {
          href: githubLink,
          rel: "me",
        },
        {
          href: "https://webmention.io/ahiravan.dev/webmention",
          rel: "webmention",
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
