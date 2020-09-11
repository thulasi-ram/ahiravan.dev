/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Flex, IconButton, jsx, NavLink, useColorMode } from "theme-ui"

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
          title="Ahiravan's Home"
          sx={{
            color: `primary`,
            textDecoration: "none",
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
            }}
          >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 1024 1024"
              enableBackground="new 0 0 1024 1024"
              // xml:space="preserve"
              fill="currentcolor"
              p={5}
            >
              <path
                id="svg-logo"
                d="M821.37 237.66L821.37 842.48Q821.37 883.95 769.9 923.98Q718.43 962.59 644.07 986.9L592.6 1005.48L609.76 974.03Q621.2 951.15 624.06 935.42Q641.21 881.09 641.21 842.48L641.21 506.47Q641.21 482.16 609.76 466.43Q578.3 450.71 529.69 450.71Q483.93 450.71 451.05 467.86Q418.16 483.59 418.16 506.47L418.16 842.48Q418.16 898.25 438.18 951.15Q441.04 959.73 449.62 974.03L466.77 1005.48L415.3 986.9Q369.55 965.45 326.65 944Q238 891.1 238 842.48L238 237.66Q238 189.05 306.63 137.57Q329.51 120.41 380.98 94.68L443.9 66.08L418.16 106.11Q401 126.13 401 159.02Q401 174.75 405.29 184.76Q409.58 193.33 423.88 204.77Q458.2 226.22 529.69 226.22Q604.04 226.22 631.21 207.63Q658.37 187.62 658.37 159.02Q658.37 137.57 654.08 126.13Q649.79 113.26 644.07 106.11L618.34 66.08L678.39 94.68Q718.43 114.69 749.88 137.57Q821.37 190.48 821.37 237.66ZM529.69 249.1Q483.93 249.1 451.05 266.26Q418.16 281.98 418.16 304.86L418.16 372.06Q418.16 396.37 449.62 412.1Q481.07 427.83 529.69 427.83Q578.3 427.83 609.76 412.1Q641.21 396.37 641.21 372.06L641.21 304.86Q641.21 280.55 609.76 264.83Q578.3 249.1 529.69 249.1Z"
              />
            </svg>
            <h1
              sx={{
                fontSize: 6,
                m: 0,
                px: 2,
                // fontFamily: 'logo'
              }}
            >
              {siteTitle}
            </h1>
          </Flex>
        </Link>
        <div sx={{ mx: "auto" }} />

        <NavLink href="/">/me</NavLink>
        <NavLink href="/blog">/Blog</NavLink>

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
            <path
              d="
          M 10 0
          A 10 10 0 0 0 10 20
          z
        "
            ></path>
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
