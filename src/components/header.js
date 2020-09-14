/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Flex, IconButton, jsx, Styled, useColorMode } from "theme-ui"
import LogoSvg from "../svgs/logo.svg"

const navLink = { p: 0, mx: 3, textTransform: "lowercase", lineHeight: 1 }

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
          aria-label="Toggle dark mode"
          sx={{
            cursor: "pointer",
          }}
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default")
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="18"
            height="18"
            fill="currentcolor"
          >
            <circle
              r={9}
              cx={10}
              cy={10}
              fill="none"
              stroke="currentcolor"
              strokeWidth={2}
            />
            <path d="M 10 0 A 10 10 0 0 0 10 20 z"></path>
          </svg>
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
