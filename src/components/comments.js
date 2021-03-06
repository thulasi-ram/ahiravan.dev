/** @jsx jsx */
import React, {useEffect} from "react"
import Helmet from "react-helmet"
import { Box, Flex, Heading, jsx } from "theme-ui"


const CactusComment = ({path}) => {

  let commentID = `${process.env.NODE_ENV}-${path}`;

  useEffect( () => {

      let cactusOptions = {
        node: document.getElementById("comment-section"),
        defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
        serverName: "cactus.chat",
        siteName: process.env.GATSBY_CACTUS_CHAT_SITE_NAME,
        commentSectionId: commentID
    }
    console.log(`${cactusOptions.commentSectionId}`)
    
    let timeout = 3000;
    if (window.initComments) {
      // since it takes sometime for cactus to load
      timeout = 0;
    }
    setTimeout(function(){
      window.initComments(cactusOptions) 
      }, timeout);
   }, [ commentID ] );


  return (
    <div id="comment-section"></div>
  )
}

export const CommentsComponent = ({current_url}) => {
  return (
    <Box>
      <Flex>
        <Heading as="h3" variant="section" sx={{ my: 4 }}>
          {" "}
          COMMENTS{" "}
        </Heading>
      </Flex>
      <CactusComment path={current_url}/>
    </Box>
  )
}

export const CommentsHeader = () => {

  return (
    <React.Fragment>
      <Helmet>
      <script type="text/javascript" src="https://latest.cactus.chat/cactus.js"></script>
      <link rel="stylesheet" href="https://latest.cactus.chat/style.css" type="text/css"></link>
      </Helmet>
    </React.Fragment>
  )
}