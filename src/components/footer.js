/** @jsx jsx */
import { Grid, jsx, Styled } from "theme-ui"
import {FooterSocial, FlexFiller} from "./composites"

const Footer = () => {
  return (
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: theme => `${theme.colors.muted} 1px solid`,
      }}
    >
      <Grid
        columns={[3]}
      >
        <FooterSocial href="https://github.com/thulasi-ram" aria-label="github">
          {`{GH}`}
        </FooterSocial>

        <FooterSocial href="https://twitter.com/ahiravan1"> {`(TW)`} </FooterSocial>

        <FooterSocial href="https://www.linkedin.com/in/thulasi-ram">
          {`[LI]`}
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
