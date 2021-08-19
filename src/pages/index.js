/** @jsx jsx */
import {
  Box,
  Flex,
  Grid,
  Heading,
  jsx,
  Styled,
  Link as TLink,
  Text,
  Button,
} from "theme-ui"
import SEO from "../components/seo"
import Layout from "../components/layout"
import {
  FlexFiller,
  LinkAsA,
  IndexPageButton,
  ButtonAsA,
} from "../components/composites"
import RightArrowSvg from "../svgs/right.svg"
import PaperPlaneSvg from "../svgs/paper_plane.svg"

const IntroP = ({ ...props }) => <Text variant="intro" {...props} />
const IntroA = ({ ...props }) => (
  <TLink rel="external" target="_blank" {...props}></TLink>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Ahiravans' Home, Blog and Musings" />

    <Grid
      sx={{
        mt: "5%",
        mb: ["20%", "15%", "10%"],
        textAlign: "center",
      }}
    >
      <Box>
        <Styled.h1 sx={{ mb: 3, fontFamily: "body" }}>
          Hi, I'm Thulasi
        </Styled.h1>
        <Styled.h2 sx={{ mb: 4, fontFamily: "body" }}>
          I build for all things web.
        </Styled.h2>

        <div
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div
            sx={{
              my: 1,
              mr: ["auto", "auto", "3%"],
              ml: "auto",
              px: 2,
            }}
          >
            <ButtonAsA
              sx={{
                width: ["90%", "80%", "70%"],
                // alignItems: "center",
                minWidth: "200px",
                maxWidth: "40%",
              }}
              variant="basic"
              href="mailto:me@ahiravan.dev"
            >
              <div sx={{ mx: "auto" }}>
                <span>Get in Touch</span>
                <PaperPlaneSvg
                  sx={{ height: "20px", width: "20px", mx: 2 }}
                ></PaperPlaneSvg>
              </div>
            </ButtonAsA>
          </div>

          <div
            sx={{
              ml: ["auto", "auto", "3%"],
              my: 1,
              mr: "auto",
              px: 2,
            }}
          >
            <Button
              sx={{
                width: ["90%", "80%", "70%"],
                // alignItems: "center",
                minWidth: "200px",
                maxWidth: "40%",
              }}
              variant="basic"
              as={LinkAsA}
              to="/blog"
            >
              <div
                sx={{
                  mx: "auto",
                }}
              >
                <span>Vist My Blog</span>
                <RightArrowSvg
                  sx={{
                    height: "24px",
                    width: "24px",
                    mx: 2,
                    alignSelf: "center",
                  }}
                ></RightArrowSvg>
              </div>
            </Button>
          </div>
        </div>
      </Box>
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
          <Heading variant="section" as="h3">
            ABOUT ME
          </Heading>
        </Flex>
        <IntroP>
          <span>Programming in the large. Currently </span>
          <IntroA
            rel="external"
            target="_blank"
            href="https://www.getsimpl.com/about-us/"
          >
            @Simpl
          </IntroA>
          <span> - Bengaluru, India.</span>
        </IntroP>

        <IntroP>
          Intrigued by design, armchair philosophy and anything CS. Fueled by a
          passion for improving the QOL through the products I design and
          create.
        </IntroP>

        <IntroP>
          <span>In leisure, I like to play </span>
          <IntroA href="https://lichess.org/@/thulasi503">chess</IntroA>
          <span>, swim, surf the web, </span>
          <IntroA href="https://www.goodreads.com/thulasi-ram">
            read books
          </IntroA>
          <span> and listen to music.</span>
        </IntroP>
      </section>

      <section>
        <Flex>
          <Heading variant="section" as="h3">
            WORK
          </Heading>
        </Flex>
        <IntroP>
          <span>Previously: </span>
          <IntroA href="https://en.wikipedia.org/wiki/Treebo_Hotels">
            @Treebo
          </IntroA>
          <span>, </span>
          <IntroA href="https://en.wikipedia.org/wiki/Infosys">@Infosys</IntroA>
        </IntroP>
        <IntroP>
          I come with a hybrid background in both backend systems and frontend
          technologies. Polyglot. Have extensive hands on experience in Python,
          Go, Ruby, Java and Javascript. In my leisure you can find me dabbling
          in less mainstream languages such as Rust, Clojure, Haskell and
          Elixir. Ocassionally I also find my self squabbling with micro css
          frameworks and other frontend developments.
        </IntroP>
      </section>
      <section>
        <Flex>
          <Heading variant="section" as="h3">
            OSS
          </Heading>
        </Flex>
        <Styled.ul sx={{ lineHeight: 2 }}>
          <Styled.li>
            <IntroA href="https://github.com/thulasi-ram/django-feature-toggle">
              Feature Toggle{" "}
            </IntroA>
          </Styled.li>
          <Styled.li>
            <IntroA href="https://github.com/thulasi-ram/diff-and-patch">
              Diff and Patch{" "}
            </IntroA>
          </Styled.li>
          <Styled.li>
            <IntroA href="https://github.com/thulasi-ram/ivory">
              IvoryCRM{" "}
            </IntroA>
          </Styled.li>
        </Styled.ul>
      </section>
    </Grid>
  </Layout>
)

export default IndexPage
