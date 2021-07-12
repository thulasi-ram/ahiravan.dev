/** @jsx jsx */
import React from "react"
import Helmet from "react-helmet"
import { Box, Flex, Heading, jsx } from "theme-ui"
class CactusComment extends React.Component {
  componentDidMount() {
    let cactusOptions = {
      node: document.getElementById("comment-section"),
      defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
      serverName: "cactus.chat",
      siteName: process.env.CACTUS_CHAT_SITE_NAME,
      commentSectionId: `${process.env.NODE_ENV}-${this.props.path}`
    }
    console.log(`${cactusOptions.commentSectionId}`)

    if (window.initComments) {
      window.initComments(cactusOptions) 
    } else {
      console.log("initComments is undefined, retrying in 3 sec")
      setTimeout(function(){
        window.initComments(cactusOptions) 
       }, 3000);
    }
  }

  render() {
      return (
        <div id="comment-section"></div>
      );
  }
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

const options = {
  node: document.getElementById("comment-section"),
  defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
  serverName: "cactus.chat",
  siteName: "ahiravan.dev",
  commentSectionId: "section1"
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