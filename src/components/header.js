/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, Flex, IconButton, jsx, useColorMode } from "theme-ui"
import LogoSvg from "../svgs/logo.svg"
import SunSvg from "../svgs/sun.svg"
import { FlexFiller } from "./composites"

const animatecss = {
  "&:hover": {
    cursor: "pointer",
    animation: "rotation 5s infinite ease",
    "@keyframes rotation": {
      from: { transform: "translateZ(0) rotate(0deg)" },
      to: { transform: "translateZ(0) rotate(359deg)" },
    },
  },
}

const logocss = {
  "& .shp1": {
    fill: "primary",
  },
  "& .shp0": {
    fill: "background",
    transition: "all 1s ease",
  },
  "&:hover": {
    "& .shp0": {
      fill: "primary",
    },
  },
}

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header
      sx={{
        bg: `background`,
      }}
    >
      <Flex
        as="nav"
        sx={{
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          title="Ahiravan's Home"
          sx={{
            color: "primary",
            alignSelf: "center",
          }}
          css={css(logocss)}
        >
          <LogoSvg
            sx={{
              width: "8em",
              height: "2.5em",
            }}
          />
        </Link>
        <FlexFiller></FlexFiller>

        <IconButton
          aria-label="Toggle dark mode"
          css={css(animatecss)}
          sx={{
            p: 0,
            width: "1em",
            height: "1em",
          }}
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default")
          }}
        >
          <SunSvg></SunSvg>
        </IconButton>
      </Flex>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
