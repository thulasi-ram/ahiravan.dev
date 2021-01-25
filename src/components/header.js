/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Button, css, Flex, jsx, useThemeUI } from "theme-ui"
import LogoSvg from "../svgs/logo.svg"
import { FlexFiller, HeaderNavLink } from "./composites"
import DarkModeToggle from "./dark_mode_toggle"
import swal from "@sweetalert/with-react"
import UpRightArrowSvg from "../svgs/upright.svg"
import DownloadSvg from "../svgs/download.svg"

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
  const { theme } = useThemeUI()

  const ResumeButton = ({ ...props }) => (
    <Button
      {...props}
      sx={{
        color: `${theme.colors.accent}`,
        mx: 3,
        flexFlow: "wrap",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontSize: 1,
        outline: `${theme.colors.primary}`,
        "&:active" : {
          boxShadow: "inset 0px 0px 100px rgba(0, 0, 0, 0.4);",
        }

      }}
    />
  )

  const previewResume = () => {
      let link = "https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/preview"
      window.open(link, "_blank") 
  }

  const downloadResume = () => {
      let link = "https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/export?format=pdf"
      window.location.href = link
  }

  const onResumeClick = () => {
    swal({
      title: "Resume Options",
      buttons: false,
      content: (
        <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
          <ResumeButton
            href="https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/preview"
            onClick={previewResume}
          >
            preview <UpRightArrowSvg sx={{ width: "1.1em", ml: 2 }} />
          </ResumeButton>

          <ResumeButton 
          href="https://docs.google.com/document/d/19U1NSPc4tTiaVzpPasZLVVWPzhY13PPFXWlBGOop7sE/preview"
          onClick={downloadResume}
          >
            download <DownloadSvg sx={{ width: "1.1em", ml:2 }} />
          </ResumeButton>
        </Flex>
      ),
    })
  }

  // onResumeClick()

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

        <HeaderNavLink as={Link} to="/blog">
          blog
        </HeaderNavLink>

        <HeaderNavLink
          onClick={() => onResumeClick()}
          sx={{ cursor: "pointer" }}
        >
          resume
        </HeaderNavLink>

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
