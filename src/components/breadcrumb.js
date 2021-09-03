/** @jsx jsx */
import { jsx } from "@theme-ui/core"
import { LinkAsA } from "./composites"

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
            <li key={"crmb" + i}>
              <LinkAsA
                variant="crumb"
                to={c.pathname || ""}
                aria-current={i === crumbs.length - 1 ? "page" : null}
                className={i === crumbs.length - 1 ? "active": ""}
              >
                {c.crumbLabel}
              </LinkAsA>
              {i === crumbs.length - 1 ? null : (
                <span aria-hidden="true" sx={{ mx: 2 }}>
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
