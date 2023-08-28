/** @jsx jsx */
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { jsx } from "theme-ui"
import { Flex } from "../components/composites"
import GithubSvg from "../svgs/github.svg"
import LinkedInSvg from "../svgs/linkedin.svg"
import TwitterSvg from "../svgs/twitter.svg"

const FooterSocial = ({ ...props }) => (
  <OutboundLink
    sx={{
      textDecoration: "none",
      fill: "secondary",
      width: "1.4em",
      mx: "auto",
      my: "auto",
    }}
    rel="external"
    {...props}
  />
)

const Footer = () => {
  return (
    <footer
      sx={{
        mx: 2,
        px: 2,
        pt: 1,
        borderTop: theme => `${theme.colors.muted} 1px solid`,
      }}
    >
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            justifyContent: "space-between",
            mt: 2,
            width: ["100%", "37%", "33%"],
            ml: ["auto", 0, 0],
            mr: "auto",
            maxWidth: ["90%", "100%", "100%"],
          }}
        >
          <FooterSocial
            href="https://github.com/thulasi-ram"
            aria-label="github"
          >
            <GithubSvg></GithubSvg>
          </FooterSocial>

          <FooterSocial
            href="https://www.linkedin.com/in/thulasi-ram"
            aria-label="linkedin"
          >
            <LinkedInSvg></LinkedInSvg>
          </FooterSocial>

          <FooterSocial
            href="https://www.twitter.com/0x12c_"
            aria-label="twitter"
          >
            <TwitterSvg></TwitterSvg>
          </FooterSocial>
        </Flex>

        <Flex
          sx={{
            mr: ["auto", 0, 0],
            ml: "auto",
          }}
        >
          <p
            sx={{
              color: "gray",
              fontSize: 1,
              fontFamily: "body",
              pt: [2, 0, 0],
              my: "auto",
            }}
          >
            © Copyright {new Date().getFullYear()}, Ahiravan
          </p>
        </Flex>
      </div>
    </footer>
  )
}

export default Footer
