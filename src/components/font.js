import React from "react"
import Helmet from "react-helmet"

const fontDir = "font-roboto"

const actualCss = `
@font-face {
    font-family: LatoSubset;
    src: url("/${fontDir}/optimized.woff2") format("woff2"),
      url("/font-roboto/optimized.woff") format("woff");
    unicode-range: U+65-90, U+97-122;
    font-style: normal;
    font-weight: 400;
    /* font-display: swap; */
  }
  
  @font-face {
    font-family: Lato;
    src: url("/${fontDir}/regular.woff2") format("woff2"),
      url("/font-roboto/regular.woff") format("woff");
    font-display: swap;
  }
  
  @font-face {
    font-family: Lato;
    src: url("/${fontDir}/bold.woff2") format("woff2"),
      url("/font-roboto/bold.woff") format("woff");
    font-weight: 700;
    font-display: swap;
  }
  
  @font-face {
    font-family: Lato;
    src: url("/${fontDir}/italic.woff2") format("woff2"),
      url("/font-roboto/italic.woff") format("woff");
    font-style: italic;
    font-display: swap;
  }
  
  @font-face {
    font-family: Lato;
    src: url("/${fontDir}/bolditalic.woff2") format("woff2"),
      url("/font-roboto/bolditalic.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }
  
  body {
    font-family: Courier, monospace;
  }
  
  .fonts-loaded-1 body {
    font-family: LatoSubset;
  }
  
  .fonts-loaded-2 body {
    font-family: Lato;
  }  
`

function FontHeader() {
  return (
    <Helmet>
      <link
        rel="preload"
        href={`/${fontDir}/optimized.woff2`}
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <style>{actualCss}</style>
    </Helmet>
  )
}

export default FontHeader
