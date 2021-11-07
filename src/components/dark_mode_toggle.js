/** @jsx jsx */

// courtesy of: https://jfelix.info/blog/using-react-spring-to-animate-svg-icons-dark-mode-toggle
import { jsx, useColorMode } from "theme-ui"

const properties = {
  sun: {
    r: 9,

    transform: "rotate(40deg)",
    transformTransition: { transition: "transform 0.5s" },

    cx: 12,
    cy: 4,
    centerTransition: { transition: "cx 0.5s, cy 0.5s" },

    opacity: 0,
    opacityTransition: { transition: "opacity 0.1s" },
  },

  moon: {
    r: 5,

    transform: "rotate(90deg)",
    transformTransition: { transition: "transform 0.8s" },

    cx: 30,
    cy: 0,
    centerTransition: { transition: "cx 0.5s, cy 0.5s" },

    opacity: 1,
    opacityTransition: { transition: "opacity `0.5s" },
  },

  springConfig: { mass: 4, tension: 250, friction: 35 },
}

const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleDarkMode = () => {
    setColorMode(colorMode === "default" ? "dark" : "default")
  }

  const {
    r,
    transform,
    transformTransition,
    cx,
    cy,
    centerTransition,
    opacity,
    opacityTransition,
  } = properties[colorMode === "dark" ? "moon" : "sun"]

  const svgContainerProps = { transform, ...transformTransition }
  const centerCircleProps = { r }
  const maskedCircleProps = { cx, cy, ...centerTransition }
  const linesProps = { opacity, ...opacityTransition }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={toggleDarkMode}
      style={{
        cursor: "pointer",
        ...svgContainerProps,
      }}
    >
      <mask id="myMask2">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle style={maskedCircleProps} r="9" fill="currentColor" />
      </mask>

      <circle
        cx="12"
        cy="12"
        style={centerCircleProps}
        fill="currentColor"
        mask="url(#myMask2)"
      />
      <g stroke="currentColor" style={linesProps}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  )
}

export default DarkModeToggle
