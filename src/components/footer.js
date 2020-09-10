/** @jsx jsx */
import { Styled, jsx, Button, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({}) => {

  return (
    <footer sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'primary',
        borderTop: theme => `${theme.colors.primary} 1px solid`,
      }}
      >
    <div sx={{ mx: 'auto' }} />

      <Styled.p>
        © Copyright {new Date().getFullYear()}, Ahiravan
        {` `}
      </Styled.p>
      <div sx={{ mx: 'auto' }} />
    </footer>
  )
}

export default Footer
