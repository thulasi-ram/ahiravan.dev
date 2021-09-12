/** @jsx jsx */
import { jsx } from "@theme-ui/core"
import { Helmet } from "react-helmet"
import { useEffect } from "react"
//Gatsby sentry plugin increses bundle size
// ref: https://github.com/getsentry/sentry-javascript/issues/2707#issuecomment-872796406

const SentryHeader = () => {

  return (
    <Helmet>
      <script
        src="https://js.sentry-cdn.com/4af2c68a592849b58c97e46d52933c09.min.js"
        crossorigin="anonymous"
        data-lazy="no" // https://docs.sentry.io/platforms/javascript/install/lazy-load-sentry/#load-timing
      ></script>
    </Helmet>
  )
}

export default SentryHeader
