/** @jsx jsx */
import { Box, Card, Grid, jsx, Styled, Text } from "theme-ui"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <Grid columns={[1, 2, 2]}>
      <Card
        sx={{
          background: "muted",
          m: 3,
          width: ["90%", null, null],
        }}
      >
        <Image sx={{ height: "50px" }} />
        <Text>heyCard</Text>
      </Card>
      <Box
        sx={{
          m: 3,
          width: ["90%", null, null],
          textAlign: "center",
        }}
      >
        <Styled.h1>Hi, I'm Thulasi</Styled.h1>
        <Styled.p>I build things for the web.</Styled.p>
      </Box>
    </Grid>
  </div>
)

export default IndexPage
