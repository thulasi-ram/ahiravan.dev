/** @jsx jsx */
import { Button, Close, Heading, Link as TLink } from "@theme-ui/components"
import { useState } from "react"
import Modal from "react-modal"
import { jsx, useThemeUI } from "theme-ui"
import { Flex, LinkAsA } from "../components/composites"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CalendarSvg from "../svgs/calendar.svg"
import EmailSvg from "../svgs/mail.svg"
import RetweetSvg from "../svgs/retweet.svg"
import RightArrowSvg from "../svgs/right.svg"
import VerticalMenuSvg from "../svgs/vertical_menu.svg"

const IntroP = ({ ...props }) => (
  <p sx={{ marginBlockStart: "1em", marginBlockEnd: "1em" }} {...props} />
)
const IntroA = ({ ...props }) => (
  <TLink rel="noopener" target="_blank" {...props}></TLink>
)

const BlockSpan = ({ ...props }) => (
  <span sx={{ display: "block" }} {...props} />
)

const GetInTouchButton = ({ text, svgIcon, ...props }) => {
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
      <div sx={{ mx: "auto", alignItems: "center", display: "inline-flex" }}>
        <span sx={{ mx: 2 }}>{text}</span>
        {svgIcon}
      </div>
    </Button>
  )
}

const IndexButton = ({ text, buttonProps, svgIcon, children }) => {
  return (
    <div
      sx={{
        my: 2,
        mx: "auto",
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
        {...buttonProps}
      >
        <div
          sx={{
            mx: "auto",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <span
            variant="heading"
            sx={{
              mr: 2,
              fontFamily: "heading",
              fontWeight: "900",
              fontSize: 2,
              // textShadow: "0px 0px 1px black",
            }}
          >
            {text}
          </span>
          {svgIcon}
        </div>
      </Button>
      {children}
    </div>
  )
}

const IndexPage = () => {
  const { theme } = useThemeUI()
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Layout>
      <Seo title="Ahiravans' Home, Blog and Musings" />

      <div
        sx={{
          display: "grid",
          mt: "5%",
          mb: ["20%", "15%", "10%"],
          textAlign: "center",
        }}
      >
        <div>
          <Heading as="h1" sx={{ mb: 3 }}>
            Hi, I'm Thulasi
          </Heading>
          <Heading as="h2" sx={{ mb: 4, fontSize: 5 }}>
            I build for all things web.
          </Heading>

          <div
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            <IndexButton
              text="GET IN TOUCH"
              svgIcon={<VerticalMenuSvg />}
              buttonProps={{
                as: TLink,
                onClick: openModal,
              }}
            />

            <IndexButton
              text="VISIT MY BLOG"
              svgIcon={<RightArrowSvg />}
              buttonProps={{
                as: LinkAsA,
                to: "/blog/",
              }}
            />

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
                  <GetInTouchButton
                    href="mailto:thulasi503@gmail.com"
                    text="email"
                    svgIcon={<EmailSvg />}
                  />

                  <GetInTouchButton
                    href="https://calendly.com/ahiravan"
                    text="calendly"
                    svgIcon={<CalendarSvg />}
                  />

                  <GetInTouchButton
                    href="https://twitter.com/0x12c_"
                    text="twitter"
                    svgIcon={<RetweetSvg />}
                  />
                </Flex>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <div
        columns={[1]}
        sx={{
          display: "grid",
          width: ["100%", "90%", "90%"],
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
            <span>
              Programming in the large. Currently{" "}
              <IntroA href="https://www.getsimpl.com/about-us/">@Simpl</IntroA>-
              Bengaluru, India.
            </span>
          </IntroP>

          <IntroP>
            Intrigued by design, armchair philosophy and anything CS. I am
            driven by a strong sense of need to improve the quality of life
            through the products I design and create. I also wish the world
            would become a gentler place.
          </IntroP>

          <IntroP>
            <span>
              In leisure, I like to play{" "}
              <IntroA href="https://lichess.org/@/thulasi503">chess</IntroA>,
              swim, surf the web,{" "}
              <IntroA href="https://www.goodreads.com/thulasi-ram">
                read books
              </IntroA>{" "}
              and listen to music.
            </span>
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
            <IntroA href="https://www.crunchbase.com/organization/treebo-hotels">
              @Treebo
            </IntroA>
            <span>, </span>
            <IntroA href="https://www.crunchbase.com/organization/infosys">
              @Infosys
            </IntroA>
          </IntroP>

          <IntroP>
            <span>
              OSS Contributions at{" "}
              <IntroA href="https://github.com/thulasi-ram">Github</IntroA> and
              thoughts on{" "}
              <IntroA href="https://www.twitter.com/0x12c_">Twitter</IntroA>
            </span>
          </IntroP>
          <IntroP>
            I come with a hybrid background in both backend systems and frontend
            technologies. Polyglot.
          </IntroP>

          <div>
            <BlockSpan>
              <u>Day to Day</u>: Python, Go and Ruby
            </BlockSpan>
            <BlockSpan>
              <u>Occasionally</u>: Javascript, misc frontend developments and
              Java.
            </BlockSpan>
            <BlockSpan>
              <u>Renewed interest</u>: Rust
            </BlockSpan>
            <BlockSpan>
              <u>Piques interest</u>:
              <ul sx={{ mt: 0 }}>
                <li>General(Hyped) Functional languages</li>
                <li>Various lisps</li>
              </ul>
            </BlockSpan>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
