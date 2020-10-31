/** @jsx jsx */
import { Grid, jsx, Styled } from "theme-ui"
import {FooterSocial, FlexFiller} from "./composites"
import GithubSvg from "../svgs/github.svg"
import TwitterSvg from "../svgs/twitter.svg"
import LinkedInSvg from "../svgs/linkedin.svg"

const Footer = () => {
  return (
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        mx: 2,
        px: 2,
        borderTop: theme => `${theme.colors.muted} 1px solid`,
      }}
    >
      <Grid
        columns={[3]}
      >
        <FooterSocial href="https://github.com/thulasi-ram" aria-label="github"  >
          <GithubSvg></GithubSvg>
        </FooterSocial>

        <FooterSocial href="https://www.linkedin.com/in/thulasi-ram" aria-label="linkedin" >
        <LinkedInSvg></LinkedInSvg>
        </FooterSocial>

        <FooterSocial href="https://www.twitter.com/ahiravan1" aria-label="twitter" >
        <TwitterSvg></TwitterSvg>
        </FooterSocial>
      </Grid>

      <FlexFiller></FlexFiller>

      <Styled.p sx={{
        color: "gray",
      }}>
        © Copyright {new Date().getFullYear()}, Ahiravan
      </Styled.p>
    </footer>
  )
}

export default Footer
