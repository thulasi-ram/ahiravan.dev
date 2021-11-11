/** @jsx jsx */
import { jsx } from "theme-ui"
import "../css/common.css"
import Footer from "./footer"
import Header from "./header"
// import SentryHeader from "./sentry"

const Layout = ({ children }) => {

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "274px",
        backfaceVisibility: "hidden",
        p: 2,
        maxWidth: "768px",
        mx: "auto"
      }}
    >
      {/* <SentryHeader/> */}
      <Header />
      <main
        sx={{
          flex: "1 1 auto",
          my: 4,
          px: 4,
          pt: 2,
        }}
      >
      {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
