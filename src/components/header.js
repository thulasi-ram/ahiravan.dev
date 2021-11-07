/** @jsx jsx */
import { NavLink } from "@theme-ui/components"
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import LogoSvg from "../svgs/logo.svg"
import DarkModeToggle from "./dark_mode_toggle"

const HeaderNavLink = ({ ...props }) => (
  <NavLink
    variant="nav"
    className="middleanim"
    sx={{
      cursor: "pointer",
      mr: 5,
    }}
    {...props}
  />
)

const Header = () => {
  return (
    <header>
      <nav
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          title="Ahiravan's Home"
          sx={{
            color: "primary",
            ml: ["auto", 0, 0],
            mr: "auto",
            minWidth: ["2.5em", null, null],
          }}
        >
          <LogoSvg
            sx={{
              width: [null, "2.5em", "2.5em"],
              height: "2.5em",
            }}
          />
        </Link>

        {/* serves as gap between logo and menu items on low resolutions */}
        <div
          sx={{
            width: ["100%", 0, 0],
            height: ["1em", null, null],
          }}
        ></div>

        <div
          sx={{
            mr: ["auto", 0, 0],
            ml: "auto",
          }}
        >
          <HeaderNavLink as={Link} to="/blog/">
            blog
          </HeaderNavLink>

          <DarkModeToggle></DarkModeToggle>
        </div>
      </nav>
    </header>
  )
}

export default Header
