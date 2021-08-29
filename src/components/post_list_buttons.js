/** @jsx jsx */
import { IconButton } from "@theme-ui/components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { useState } from "react"
import { jsx } from "theme-ui"
import DocListSvg from "../svgs/doc_list.svg"
import TableSvg from "../svgs/table.svg"

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

const PostListIconButton = ({ ...props }) => {
  return <IconButton sx={{ height: "auto", cursor: "pointer", width: "2em" }} {...props} />
}

export const PostListViewButton = ({ ...props }) => {
  const breakpoints = useBreakpoint()
  const getDefaultView = () => {
    return breakpoints.posts_list_break ? "list" : "table"
  }

  let [preferredView, setPreferredView] = useLocalStorage(
    "post_list_view",
    getDefaultView()
  )

  const buttonClick = val => {
    props.preferredViewCallback(val)
    setPreferredView(val)
  }

  return preferredView === "table" ? (
    <PostListIconButton aria-label="list view">
      <DocListSvg onClick={() => buttonClick("list")} />
    </PostListIconButton>
  ) : (
    <PostListIconButton aria-label="table view">
      <TableSvg onClick={() => buttonClick("table")} />
    </PostListIconButton>
  )
}
