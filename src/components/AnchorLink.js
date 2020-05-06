import React from "react"
import { Link } from "react-scroll"

const AnchorLink = ({
  to,
  children,
  href = "",
  activeClass = "active",
  className = "",
  spy = true,
  smooth = true,
  offset = 0,
  duration = 500,
  ...rest
}) => {
  return (
    <Link
      activeClass={activeClass}
      className={className}
      href={href || "#" + to}
      to={to}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default AnchorLink
