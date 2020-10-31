/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, Flex, jsx } from "theme-ui"
import LogoSvg from "../svgs/logo.svg"
import { FlexFiller, HeaderNavLink } from "./composites"
import DarkModeToggle from "./dark_mode_toggle"

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
        <HeaderNavLink
        href="https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/preview"
        target="_blank"
        rel="external"
        >resume</HeaderNavLink>

<HeaderNavLink as={Link} to="/blog">blog</HeaderNavLink>
        <DarkModeToggle></DarkModeToggle>
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
