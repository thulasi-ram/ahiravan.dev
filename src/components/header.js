/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Flex, IconButton, jsx, Styled, useColorMode } from "theme-ui"
import LogoSvg from "../svgs/logo.svg"
import SunSvg from "../svgs/sun.svg"

const navLink = {
  p: "2.5px",
  ml: "4",
  textTransform: "lowercase",
  lineHeight: 1,
  fontWeight: "bold",
  width: "inherit",
  height: "inherit",
}

const animatecss = {
  "&:hover": {
    cursor: "pointer",
    animation: "rotation 5s infinite ease",
    "@keyframes rotation": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(359deg)" },
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
            color: `primary`,
            textDecoration: "none",
            alignSelf: "flex-end",
          }}
        >
          <LogoSvg
            sx={{
              width: "8em",
              height: "2.5em",
            }}
          />
        </Link>
        <div sx={{ mx: "auto" }} />

        <Styled.a as={Link} sx={navLink} to="/">
          /me
        </Styled.a>
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
