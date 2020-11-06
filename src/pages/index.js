/** @jsx jsx */
import { Box, Flex, Grid, Heading, jsx, Styled } from "theme-ui"
import {
  IntroA,
  IntroP
} from "../components/composites"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Ahiravans' Home, Blog and Musings" />

    <Grid
      sx={{
        mt: "5%",
        mb: ["20%", "15%", "10%"],
        textAlign: "center",
      }}
    >
      <Box>
        <Styled.h1>Hi, I'm Thulasi</Styled.h1>
        <Styled.h2>I build for all things web.</Styled.h2>

        {/* <Grid columns={[2]} sx={{ mt: 4 }}> */}
          {/* <IndexPageButton
            href="https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/export?format=pdf"
            download
            sx={{ ml: "auto" }}
          >
            <Flex
              sx={{
                alignItems: "center",
              }}
            >
              <FlexFiller></FlexFiller>
              RESUME
              <DownloadSvg sx={{ height: "24px", width: "24px", mx: 2 }}></DownloadSvg>
              <FlexFiller></FlexFiller>
            </Flex>
          </IndexPageButton> */}

          {/* <IndexPageButton as={LinkAsA} to="/blog" sx={{ mr: "auto" }}>
            <Flex
              sx={{
                alignItems: "center",
              }}
            >
              <FlexFiller></FlexFiller>
              BLOG
              <RightArrowSvg
                sx={{ height: "24px", width: "24px", mx: 2 }}
              ></RightArrowSvg>
              <FlexFiller></FlexFiller>
            </Flex>
          </IndexPageButton> */}
        {/* </Grid> */}
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
          <Heading variant="section" as="h3"> ABOUT ME</Heading>
        </Flex>
        <IntroP>
          Crafting software, with &#10084; currently{" "}
          <IntroA href="https://www.getsimpl.com/about-us/">@Simpl</IntroA> -
          Bengaluru, India.{" "}
        </IntroP>

        <IntroP>
          Intrigued by design, armchair philosophy and anything CS. Fueled by a
          passion for improving the QOL through the products I design and
          create.
        </IntroP>

        <IntroP>
          In leisure, I like to play{" "}
          <IntroA href="https://lichess.org/@/thulasi503"> chess</IntroA>, swim,
          surf the web,{" "}
          <IntroA href="https://www.goodreads.com/thulasi-ram">
            read books
          </IntroA>{" "}
          and listen to music.
        </IntroP>
      </section>

      <section>
        <Flex>
          <Heading variant="section" as="h3"> WORK </Heading>
        </Flex>
        <IntroP>
          Previously:{" "}
          <IntroA href="https://en.wikipedia.org/wiki/Treebo_Hotels">
            {" "}
            @Treebo
          </IntroA>{" "}
          ,{" "}
          <IntroA href="https://en.wikipedia.org/wiki/Infosys">
            {" "}
            @Infosys
          </IntroA>{" "}
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
          <Heading variant="section" as="h3"> OSS </Heading>
        </Flex>
        <Styled.ul sx={{lineHeight: 2}}>
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
  </div>
)

export default IndexPage
