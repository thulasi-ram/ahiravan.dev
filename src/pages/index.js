/** @jsx jsx */
import { Box, Card, Grid, jsx, Heading, Flex, Styled, Button } from "theme-ui"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <Grid columns={[1, 2, 2]}>
      <Grid
        sx={{
          m: 3,
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <h1>Hi, I'm Thulasi</h1>
          <Heading>I build for all things web.</Heading>

          <Grid columns={[1]} sx={{ m: 4 }}>
            <Button variant="basic"> RESUME &#x2b07; </Button>
          </Grid>
        </Box>
      </Grid>
      <Card
        sx={{
          m: 3,
          p: 3,
          width: ["90%", null, null],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image />
        <p
          sx={{
            mt: 0,
            textTransform: "uppercase",
            color: "accent",
            fontSize: 2,
          }}
        >
          backend Developer | Designer{" "}
        </p>
        <p> me{"{at}"}ahiravan.dev</p>
        <Grid
          columns={[3]}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Styled.a href="/" sx={{ fontWeight: "bold", p: 1 }}>
            {" "}
            GITHUB{" "}
          </Styled.a>
          <Styled.a href="/" sx={{ fontWeight: "bold", p: 1 }}>
            {" "}
            TWITTER{" "}
          </Styled.a>
          <Styled.a href="/" sx={{ fontWeight: "bold", p: 1 }}>
            {" "}
            LINKEDIN{" "}
          </Styled.a>
        </Grid>
      </Card>
    </Grid>

    <section>
      <Flex>
        <Heading variant="section"> ABOUT ME </Heading>
      </Flex>
      <p>Crafting software, with &#10084; from @simpl in Bengaluru, India. </p>

      <p>
        Intrigued by design, armchair philosophy and anything CS. Fueled by a
        passion for improving the QOL through the products I design and create.
      </p>

      <p>
        I like to play chess, swim, surf the web, read books and listen to music
        in leisure.
      </p>
    </section>

    <section>
      <Flex>
        <Heading variant="section"> WORK </Heading>
      </Flex>
      <p>Previously at: Treebo, Infosys</p>
      <p>
        I come with a hybrid background in both backend systems and frontend
        technologies. Polyglot. Have extensive hands on experience in Python,
        Go, Javascript, Java and misc css frameworks. Have briefly tried out
        Clojure, Haskell, Ruby and Elixir.
      </p>

      <h4>oss contributions: </h4>
      <p>Feature Toggle - Python </p>
      <p>Diff and Patch - Python </p>
      <p>IvoryCRM (discontinued) - Python</p>
    </section>
  </div>
)

export default IndexPage
