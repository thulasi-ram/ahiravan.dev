/** @jsx jsx */
import { Styled, jsx, Flex, NavLink, useColorMode, IconButton } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
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
          sx={{
            color: `primary`,
            textDecoration: "none",
            // fontWeight: `inherit`,
          }}
        >
          <h1
            sx={{
              fontSize: 5,
              m: 0,
            }}
          >
            {siteTitle}
          </h1>
        </Link>
        <div sx={{ mx: "auto" }} />

        <NavLink href="#!">/Home</NavLink>
        <NavLink href="#!">/Blog</NavLink>
        <NavLink href="#!">/About</NavLink>
        {/* <Button
          sx={{
            textDecoration: "underline",
            color: "primary",
          }}
          variant="link"
        >
          use {colorMode === "default" ? "dark" : "light"} theme
        </Button> */}

        <IconButton
          aria-label="Toggle dark mode"
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default")
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentcolor"
          >
            <circle
              r={11}
              cx={12}
              cy={12}
              fill="none"
              stroke="currentcolor"
              strokeWidth={2}
            />
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
