/** @jsx jsx */
import Valine from "gatsby-plugin-valine"
import { Box, Flex, Heading, jsx } from "theme-ui"
var langMode = {
  nick: "NAme",
  head: {
    nick: "NAme",
    mail: "E-Mail",
    link: "Website(http://)",
  },
  tips: {
    comments: "Comments",
    sofa: "No comments yet.",
    busy: "Submit is busy, please wait...",
    again: "Sorry, this is a wrong calculation.",
  },
  ctrl: {
    reply: "Reply",
    ok: "Ok",
    sure: "Sure",
    cancel: "Cancel",
    confirm: "Confirm",
    continue: "Continue",
    more: "Load More...",
    try: "Once More?",
    preview: "Preview",
    emoji: "Emoji",
  },
  error: {
    99: "Initialization failed, Please check the `el` element in the init method.",
    100: "Initialization failed, Please check your appId and appKey.",
    401: "Unauthorized operation, Please check your appId and appKey.",
    403: "Access denied by api domain white list, Please check your security domain.",
  },
  timeago: {
    seconds: "seconds ago",
    minutes: "minutes ago",
    hours: "hours ago",
    days: "days ago",
    now: "just now",
  },
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
      <Valine path={current_url}/>
    </Box>
  )
}
