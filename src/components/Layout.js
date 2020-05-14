import React from "react"
import PropTypes from "prop-types"
import TopNavigation from "./TopNavigation"

import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <TopNavigation />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
