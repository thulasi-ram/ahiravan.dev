/** @jsx jsx */
import { Link } from "gatsby"
import { Button, jsx, Styled } from "theme-ui"

export const IntroP = ({ ...props }) => <Styled.p sx={{ fontSize: 3 }} {...props} />
export const IntroA = ({ ...props }) => <Styled.a sx={{ fontSize: 3 }} rel="external" {...props} />
export const LinkAsA = ({ ...props }) => <Styled.a as={Link} {...props} />
export const ButtonAsA = ({ ...props }) => <Button as={Styled.a} {...props} />
export const FooterSocial = ({ ...props }) => <Styled.a sx={{  textDecoration: "none"}} rel="external" {...props} />
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
