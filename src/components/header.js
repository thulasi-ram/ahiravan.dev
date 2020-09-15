/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Flex, IconButton, jsx, Styled, useColorMode } from "theme-ui"
import LogoSvg from "../svgs/logo.svg"
import SunSvg from "../svgs/sun.svg"

const navLink = { 
  p: "2.5px", 
  ml: "2em", 
  textTransform: "lowercase", 
  lineHeight: 1,
  fontWeight: 'bold',
  width:'inherit',
  height: 'inherit'
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

        <Styled.a
          as={Link}
          sx={navLink}
          to="/"
        >
          /me
        </Styled.a>
        <Styled.a as={Link} to="/blog" sx={navLink}>
          /Blog
        </Styled.a>

        <IconButton
        as={Styled.a}
          aria-label="Toggle dark mode"
          sx={navLink}
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
