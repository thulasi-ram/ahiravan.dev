/** @jsx jsx */
import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { Box, Flex, Heading, jsx } from "theme-ui"

const loadCactusScript = callback => {
  const existingScript = window.initComments
  if (!existingScript) {
    const script = document.createElement("script")
    script.src = "https://latest.cactus.chat/cactus.js"
    script.id = "cactusComments"
    document.body.appendChild(script)
    script.onload = () => {
      if (callback) callback()
    }
  }
  if (existingScript && callback) callback()
}

const CactusComment = ({ path }) => {
  let commentID = `${process.env.NODE_ENV}-${path}`

  useEffect(() => {

    loadCactusScript(() => {
      window.initComments({
        node: document.getElementById("comment-section"),
        defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
        serverName: "cactus.chat",
        siteName: process.env.GATSBY_CACTUS_CHAT_SITE_NAME,
        commentSectionId: commentID,
      })
    })
  }, [commentID])
  // why to return cactusOptions here
  // ref: https://stackoverflow.com/questions/61956823/why-cant-useeffect-access-my-state-variable-in-a-return-statement

  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="preload"
          as="style"
          href="https://latest.cactus.chat/style.css"
          onload="this.onload=null;this.rel='stylesheet'"
        ></link>
        <noscript>
          {`<link rel="stylesheet" href="https://latest.cactus.chat/style.css"/>`}
        </noscript>
        {/* <script type="text/javascript" defer src="https://latest.cactus.chat/cactus.js"   onLoad={`console.log('HAAEHHHAHHEHHHA')`} */}
        {/* ></script> */}
      </Helmet>
      <div id="comment-section"></div>
    </React.Fragment>
  )
}

export const CommentsComponent = ({ current_url }) => {
  return (
    <Box>
      <Flex>
        <Heading as="h3" variant="section" sx={{ my: 4 }}>
          {" "}
          COMMENTS{" "}
        </Heading>
      </Flex>
      <CactusComment path={current_url} />
    </Box>
  )
}
