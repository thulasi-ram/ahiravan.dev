/** @jsx jsx */
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types"
import { Flex, IconButton, jsx, Styled, useColorMode, css } from "theme-ui"
import LogoSvg from "../svgs/logo.svg"
import SunSvg from "../svgs/sun.svg"
import {Link} from "gatsby"

const navLink = {
  p: "2.5px",
  ml: "4",
  textTransform: "lowercase",
  textDecoration: "none",
  lineHeight: 1,
  fontWeight: "medium",
  width: "inherit",
  height: "inherit",
  fontSize: "3"
}

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
  '& .shp1': {
    fill: 'primary',
  },
  '& .shp0': {
    fill: 'background',
    transition: "all 1s ease"
  },
    "&:hover": {
      '& .shp0': {
        fill: 'primary',
      }
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
        <div sx={{ mx: "auto" }} />

        <Styled.a as={Link} to="/blog" sx={navLink}>
          /Blog
        </Styled.a>

        <IconButton
          aria-label="Toggle dark mode"
          sx={navLink}
          css={animatecss}
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
