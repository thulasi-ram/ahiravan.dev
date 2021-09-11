/** @jsx jsx */
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  jsx,
  Link as TLink,
  Text,
  Paragraph,
  useThemeUI,
  Close,
} from "theme-ui"
import { ButtonAsA, LinkAsA } from "../components/composites"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CalendarSvg from "../svgs/calendar.svg"
import EmailSvg from "../svgs/mail.svg"
import RetweetSvg from "../svgs/retweet.svg"
import RightArrowSvg from "../svgs/right.svg"
import VerticalMenuSvg from "../svgs/vertical_menu.svg"
import { useState } from "react"
import Modal from "react-modal"

const IntroP = ({ ...props }) => (
  <Text variant="intro" as={Paragraph} {...props} />
)
const IntroA = ({ ...props }) => (
  <TLink rel="external" target="_blank" {...props}></TLink>
)

const getInTouchSVGSx = { width: "1.1em", verticalAlign: "middle" }

const GetInTouchButton = ({ children, theme, ...props }) => {
  return (
    <Button
      variant="basic_thin"
      sx={{
        width: "100%",
        my: 2,
      }}
      {...props}
      onClick={() => window.open(props.href, "_blank")}
    >
      <div sx={{ mx: "auto" }}>{children}</div>
    </Button>
  )
}
const GetInTouchIndexButton = ({ theme }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <ButtonAsA
        sx={{
          width: ["90%", "80%", "70%"],
          minWidth: "200px",
          maxWidth: "40%",
        }}
        variant="basic"
        onClick={openModal}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Get In Touch Modal"
        ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            padding: "10px",
            transform: "translate(-50%, -50%)",
            border: `1px solid ${theme.colors.primary}`,
            backgroundColor: theme.colors.background,
            borderRadius: "10px",
            transition: "all .5s ease",
          },
        }}
      >
        <div>
          <Flex>
            <Close
              onClick={closeModal}
              sx={{
                color: theme.colors.primary,
                ml: "auto",
                mr: 0,
                mt: 0,
                cursor: "pointer",
              }}
            />
          </Flex>
          <Flex>
            <Heading as="h3" sx={{ mx: "auto", mt: 2 }}>
              {" "}
              Get In Touch{" "}
            </Heading>
          </Flex>
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              px: [4, 5, 6],
              mb: 4,
            }}
          >
            <GetInTouchButton href="mailto:me@ahiravan.dev" theme={theme}>
              <span sx={{ verticalAlign: "middle" }}>email</span>{" "}
              <EmailSvg sx={getInTouchSVGSx} />
            </GetInTouchButton>

            <GetInTouchButton
              href="https://calendly.com/ahiravan"
              theme={theme}
            >
              <span sx={{ verticalAlign: "middle" }}>calendly</span>{" "}
              <CalendarSvg sx={getInTouchSVGSx} />
            </GetInTouchButton>

            <GetInTouchButton
              href="https://twitter.com/ahiravan1"
              theme={theme}
            >
              <span sx={{ verticalAlign: "middle" }}>twitter</span>{" "}
              <RetweetSvg sx={getInTouchSVGSx} />
            </GetInTouchButton>
          </Flex>
        </div>
      </Modal>
    </div>
  )
}

const IndexPage = () => {
  const { theme } = useThemeUI()

  return (
    <Layout>
      <Seo title="Ahiravans' Home, Blog and Musings" />

      <Grid
        sx={{
          mt: "5%",
          mb: ["20%", "15%", "10%"],
          textAlign: "center",
        }}
      >
        <Box>
          <Heading as="h1" sx={{ mb: 3, fontFamily: "body" }}>
            Hi, I'm Thulasi
          </Heading>
          <Heading as="h2" sx={{ mb: 4, fontFamily: "body", fontSize: 6 }}>
            I build for all things web.
          </Heading>

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
              <GetInTouchIndexButton theme={theme}></GetInTouchIndexButton>
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
                to="/blog/"
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
          width: "90%",
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
            <span>OSS Contributions at </span>
            <IntroA href="https://github.com/thulasi-ram">Github</IntroA>

            <span> and thoughts on </span>

            <IntroA href="https://www.twitter.com/ahiravan1">Twitter</IntroA>
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
