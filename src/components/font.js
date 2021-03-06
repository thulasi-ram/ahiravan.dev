/** @jsx jsx */
// import { css, Global } from "@emotion/core"
import React from "react"
import Helmet from "react-helmet"
import { jsx } from "theme-ui"
import {FONT_NAME} from "../constants"


const fontDir = "font-roboto"

// ref: check gatsby browser.js as well, inspired by: https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft
// export const actualCss = `
// @font-face {
//     font-family: LatoSubset;
//     src: url("/${fontDir}/optimized.woff2") format("woff2"),
//       url("/${fontDir}/optimized.woff") format("woff");
//     unicode-range: U+65-90, U+97-122;
//     font-style: normal;
//     font-weight: 400;
//     /* font-display: swap; */
//   }
  
//   @font-face {
//     font-family: Lato;
//     src: url("/${fontDir}/regular.woff2") format("woff2"),
//       url("/${fontDir}/regular.woff") format("woff");
//     font-display: swap;
//   }
  
//   @font-face {
//     font-family: Lato;
//     src: url("/${fontDir}/bold.woff2") format("woff2"),
//       url("/${fontDir}/bold.woff") format("woff");
//     font-weight: 700;
//     font-display: swap;
//   }
  
//   @font-face {
//     font-family: Lato;
//     src: url("/${fontDir}/italic.woff2") format("woff2"),
//       url("/${fontDir}/italic.woff") format("woff");
//     font-style: italic;
//     font-display: swap;
//   }
  
//   @font-face {
//     font-family: Lato;
//     src: url("/${fontDir}/bolditalic.woff2") format("woff2"),
//       url("/${fontDir}/bolditalic.woff") format("woff");
//     font-weight: 700;
//     font-style: italic;
//     font-display: swap;
//   }
  
//   body {
//     font-family: Courier, monospace;
//   }
  
//   .fonts-loaded body {
//     font-family: LatoSubset;
//   }
  
//   .fonts-loaded body {
//     font-family: Lato;
//   }  
// `

function FontHeader() {

  // Deprecated in favour of font.css

  let fontName = FONT_NAME.split(" ").join("+")
  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="preload"
          href={`/${fontDir}/optimized.woff2`}
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href={`https://fonts.googleapis.com/css?family=${fontName}:400,500,700&display=swap`}
          as="style"
        />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${fontName}:400,500,700&display=swap`}
        />
      </Helmet>
      {/* <Global
        styles={css`
          ${actualCss}
        `}
      /> */}
    </React.Fragment>
  )
}

export default FontHeader
