/** @jsx jsx */
import { Grid, jsx, Styled, Flex, Box } from "theme-ui"
import { FooterSocial, FlexFiller } from "./composites"
import GithubSvg from "../svgs/github.svg"
import TwitterSvg from "../svgs/twitter.svg"
import LinkedInSvg from "../svgs/linkedin.svg"

const Footer = () => {
  return (
    <footer
      sx={{
        mx: 2,
        px: 2,
        pt:1,
        borderTop: theme => `${theme.colors.muted} 1px solid`,
      }}
    >
      <Grid columns={['1fr 2fr']}>
        <Grid columns={[3]} 
        sx={{
          maxWidth: "200px",
          mt: 2,
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
            href="https://www.twitter.com/ahiravan1"
            aria-label="twitter"
          >
            <TwitterSvg></TwitterSvg>
          </FooterSocial>
        </Grid>


        <Flex>
        <FlexFiller sx={{mx: "auto"}}></FlexFiller>

          <Styled.p
            sx={{
              color: "gray",
              fontSize: [1, 2, 2],
              my: "auto"
            }}
          >
            © Copyright {new Date().getFullYear()}, Ahiravan
          </Styled.p>
          </Flex>
      </Grid>
    </footer>
  )
}

export default Footer
