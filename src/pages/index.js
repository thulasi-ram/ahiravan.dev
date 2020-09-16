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

          <Grid columns={[1]} sx={{m: 4}}>
            <Button> RESUME </Button>
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
        <Image/>
        <p sx={{ mt: 0, textTransform: "uppercase", color: 'accent', fontSize: 2}}>
          Web Developer | Designer{" "}
        </p>
        <p> me{"{at}"}ahiravan.dev</p>
        <Grid columns={[3]} 
        sx={{          
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          }}
          >
        <Styled.a href="/" sx={{fontWeight: 'bold', textDecoration: "none", p: 1}}> GITHUB </Styled.a>
        <Styled.a href="/" sx={{fontWeight: 'bold', textDecoration: "none", p: 1}}> TWITTER </Styled.a>
        <Styled.a href="/" sx={{fontWeight: 'bold', textDecoration: "none", p: 1}}> LINKEDIN </Styled.a>
        </Grid>
      </Card>
    </Grid>

    <section>
      <Flex>
        <Heading variant="section"> ABOUT ME </Heading>
      </Flex>
      Building startups and Crafting software, currently based in Bengaluru,
      India. Intrigued by design, armchair philosophy and anything CS. I also
      like to play chess, swim, surf the web, read books and listen to music.
      Seeking to be inspired and fueled by a passion for improving the quality
      of life of the people through the products I design and create. I come
      with a hybrid background in both backend systems and frontend
      technologies. Polyglot. Have extensive hands on experience in Python, Go,
      Javascript, Java and misc css frameworks. Have briefly tried out Clojure,
      Haskell, Ruby and Elixir.
    </section>

    <section>
      <Flex>
        <Heading variant="section"> WORK </Heading>
      </Flex>
      Previously: tReebo, infosys currently: simpl oss contributions: Feature
      Toggle - Python Diff and Patch - Python IvoryCRM (discontinued) - Python
    </section>
  </div>
)

export default IndexPage
