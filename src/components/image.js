/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { jsx } from "theme-ui"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <Img
        sx={{ 
          height: "100px",
          width: "100px",
          borderRadius: "200px",
          border: "black 2px solid",
          m: 4,
           }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
  )
}

export default Image
