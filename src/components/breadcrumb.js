/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"

const BreadCrumb = ({ crumbs }) => {

  return (

      <nav aria-label="Breadcrumb">
        <ol
          sx={{
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            margin: 0,
            pl: 0,
          }}
        >
          {crumbs.map((c, i) => {
            return (
              <li key={"crmb"  + i}>
                <Styled.a
                as={Link}
                  to={c.pathname || ""}
                  activeClassName="breadcrumb__link__active"
                  aria-current={i === crumbs.length - 1 ? "page" : null}
                >
                  {c.crumbLabel}
                </Styled.a>
                {i === crumbs.length - 1 ? null : (
                  <span aria-hidden="true" sx={{mx: 2}}>
                  {c.crumbSeparator}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>

  )
}

export default BreadCrumb
