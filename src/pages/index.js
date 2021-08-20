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
  useThemeUI
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
import VerticalMenuSvg from "../svgs/vertical_menu.svg"
import swal from "@sweetalert/with-react"
import UpRightArrowSvg from "../svgs/upright.svg"
import CalendarSvg from "../svgs/calendar.svg"
import EmailSvg from "../svgs/mail.svg"
import RetweetSvg from "../svgs/retweet.svg"


const IntroP = ({ ...props }) => <Text variant="intro" {...props} />
const IntroA = ({ ...props }) => (
  <TLink rel="external" target="_blank" {...props}></TLink>
)

const IndexPage = () => {
  const { theme } = useThemeUI()

  const GetInTouchButton = ({ ...props }) => (
    <Button
      {...props}
      sx={{
        color: `${theme.colors.accent}`,
        mx: 3,
        flexFlow: "wrap",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontSize: 1,
        outline: `${theme.colors.primary}`,
        "&:active": {
          boxShadow: "inset 0px 0px 100px rgba(0, 0, 0, 0.4);",
        },
      }}
    />
  )

  const onGetInTouchClick = () => {
    swal({
      title: "Get In Touch",
      buttons: false,
      content: (
        <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
          <GetInTouchButton
            href="https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/preview"
          >
            email <EmailSvg sx={{ width: "1.1em", ml: 2 }} />
          </GetInTouchButton>

          <GetInTouchButton
            href="https://calendly.com/ahiravan"
          >
            calendly <CalendarSvg sx={{ width: "1.1em", ml: 2 }} />
          </GetInTouchButton>

          <GetInTouchButton
            href="https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/preview"
          >
            twitter <RetweetSvg sx={{ width: "1.1em", ml: 2 }} />
          </GetInTouchButton>
        </Flex>
      ),
    })
  }

  return (
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
                  minWidth: "200px",
                  maxWidth: "40%",
                }}
                variant="basic"
                // href="mailto:me@ahiravan.dev"
                onClick={() => onGetInTouchClick()}
              >
                <div sx={{ mx: "auto" }}>
                  <span
                    sx={{
                      verticalAlign: "middle",
                    }}
                  >
                    Get in Touch
                  </span>
                  <VerticalMenuSvg
                    sx={{
                      ml: 2,
                      verticalAlign: "middle",
                    }}
                  ></VerticalMenuSvg>
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
                  <span
                    sx={{
                      verticalAlign: "middle",
                    }}
                  >
                    Vist My Blog
                  </span>
                  <RightArrowSvg
                    sx={{
                      ml: 2,
                      verticalAlign: "middle",
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
            Intrigued by design, armchair philosophy and anything CS. Fueled by
            a passion for improving the QOL through the products I design and
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
            <IntroA href="https://en.wikipedia.org/wiki/Infosys">
              @Infosys
            </IntroA>
          </IntroP>

          <IntroP>
            OSS Contributions{" "}
            <IntroA href="https://en.wikipedia.org/wiki/Treebo_Hotels">
              @Github
            </IntroA>{" "}
            and thoughts on{" "}
            <IntroA href="https://en.wikipedia.org/wiki/Treebo_Hotels">
              @Twitter
            </IntroA>
          </IntroP>
          <IntroP>
            I come with a hybrid background in both backend systems and frontend
            technologies. Polyglot. Have extensive hands on experience in
            Python, Go, Ruby, Java and Javascript. In my leisure you can find me
            dabbling in less mainstream languages such as Rust, Clojure, Haskell
            and Elixir. Ocassionally I also find my self squabbling with micro
            css frameworks and other frontend developments.
          </IntroP>
        </section>
      </Grid>
    </Layout>
  )
}

export default IndexPage
