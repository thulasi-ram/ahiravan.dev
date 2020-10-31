/** @jsx jsx */
import { Link } from "gatsby"
import { Button, jsx, NavLink, Styled } from "theme-ui"

export const IntroP = ({ ...props }) => (
  <Styled.p sx={{ fontSize: 3 }} {...props} />
)
export const IntroA = ({ ...props }) => (
  <Styled.a sx={{ fontSize: 3 }} rel="external" {...props} target="_blank" />
)
export const LinkAsA = ({ ...props }) => <Styled.a as={Link} {...props} />
export const ButtonAsA = ({ ...props }) => <Button as={Styled.a} {...props} />
export const FooterSocial = ({ ...props }) => (
  <a sx={{ textDecoration: "none", fill: "secondary", width: "1.4em"}} rel="external" {...props} />
)
export const IndexPageButton = ({ ...props }) => (
  <ButtonAsA
    sx={{
      width: ["90%", "80%", "70%"],
      minWidth: "120px",
    }}
    variant="basic"
    {...props}
  />
)
export const FlexFiller = ({ ...props }) => (
  <div sx={{ mx: "auto" }} {...props}></div>
)
export const DividerWithText = ({ ...props }) => (
  <div
    sx={{
      width: ["70%", "50%", "30%"],
      textAlign: "center",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "muted",
      lineHeight: "0.1em",
      my: "2",
      mx: "4",

      "& > span": {
        bg: "background",
        px: "2",
        color: "gray",
      },
    }}
  >
    {" "}
    <span> {props.text} </span>
  </div>
)
export const HeaderNavLink = ({ ...props }) => (
  <NavLink
    sx={{
      mr: 5,
    }}
    className="middleanim"
    {...props}
  />
)
