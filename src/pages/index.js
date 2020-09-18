/** @jsx jsx */
import { Box, Card, Grid, jsx, Heading, Flex, Styled, Button } from "theme-ui"
import Image from "../components/image"
import SEO from "../components/seo"

const IntroP = ({ ...props }) => <Styled.p sx={{ fontSize: 3 }} {...props} />
const IntroA = ({ ...props }) => <Styled.a sx={{ fontSize: 3 }} {...props} />

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <Grid columns={[1, 2, 2]}>
      <Grid
        sx={{
          mx: 3,
          my: 4,
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <h1>Hi, I'm Thulasi</h1>
          <Heading>I build for all things web.</Heading>

          <Grid
            columns={[1]}
            sx={{
              m: 4,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="basic"
              sx={{
                px: 4,
                py: 2,
                mx: "auto",
                minWidth: "10em",
              }}
              as={Styled.a}
              href="https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/export?format=pdf"
              download
            >
              {" "}
              RESUME &#x2b07;{" "}
            </Button>
          </Grid>
        </Box>
      </Grid>
      <Card
        sx={{
          mx: "auto",
          p: 3,
          my: 3,
          width: ["90%", null, null],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "18em",
        }}
      >
        <Image />
        <Styled.p
          sx={{
            mt: 0,
            textTransform: "uppercase",
            color: "accent",
          }}
        >
          backend Developer
        </Styled.p>
        <Styled.p> me{"{at}"}ahiravan.dev</Styled.p>
        <Grid
          columns={[3]}
          gap={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mx: 1,
          }}
        >
          <Styled.a href="https://github.com/thulasi-ram" sx={{ fontWeight: "bold", p: 1 }}>
            {" "}
            GITHUB{" "}
          </Styled.a>
          <Styled.a href="/" sx={{ fontWeight: "bold", p: 1 }}>
            {" "}
            TWITTER{" "}
          </Styled.a>
          <Styled.a href="https://www.linkedin.com/in/thulasi-ram" sx={{ fontWeight: "bold", p: 1 }}>
            {" "}
            LINKEDIN{" "}
          </Styled.a>
        </Grid>
      </Card>
    </Grid>

    <Grid
      columns={[1]}
      sx={{
        width: ["90%", "90%", "90%"],
        mx: "auto",
        my: 3,
      }}
    >
      <section>
        <Flex>
          <Heading variant="section"> ABOUT ME </Heading>
        </Flex>
        <IntroP>
          Crafting software, with &#10084; currently <IntroA href="/">@Simpl</IntroA>{" "}
          in Bengaluru, India.{" "}
        </IntroP>

        <IntroP>
          Intrigued by design, armchair philosophy and anything CS. Fueled by a
          passion for improving the QOL through the products I design and
          create.
        </IntroP>

        <IntroP>
          In leisure, I like to play <IntroA href="https://lichess.org/@/thulasi503"> chess</IntroA>, swim, surf
          the web,{" "}
          <IntroA href="https://www.goodreads.com/thulasi-ram">read books</IntroA> and listen to music.
        </IntroP>
      </section>

      <section>
        <Flex>
          <Heading variant="section"> WORK </Heading>
        </Flex>
        <IntroP>
          Previously: <IntroA href="https://en.wikipedia.org/wiki/Treebo_Hotels"> @Treebo</IntroA> ,{" "}
          <IntroA href="https://en.wikipedia.org/wiki/Infosys"> @Infosys</IntroA>{" "}
        </IntroP>
        <IntroP>
          I come with a hybrid background in both backend systems and frontend
          technologies. Polyglot. Have extensive hands on experience in Python,
          Go, Javascript, Java and misc css frameworks. Have briefly tried out
          Clojure, Haskell, Ruby and Elixir.
        </IntroP>
      </section>
      <section>
        <Flex>
          <Heading variant="section"> OSS </Heading>
        </Flex>
        <ul>
          <li>
            {" "}
            <IntroA href="/">
              Feature Toggle{" "}
            </IntroA>
          </li>
          <li>
            <IntroA href="/">
              Diff and Patch{" "}
            </IntroA>
          </li>
          <li>
            <IntroA href="/">
              {" "}
              IvoryCRM{" "}
            </IntroA>
          </li>
        </ul>
      </section>
    </Grid>
  </div>
)

export default IndexPage
