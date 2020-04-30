import React from "react"
import ExternalLink from "./ExternalLink"

const Footer = () => {
  return (
    <div className="pt-5 pb-1" id="footer-01">
      <div className="container">
        <div className="row">
          <div className="col">
            <hr className="mb-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 text-secondary text-center text-lg-left">
            <p className="pb-2">
              <ExternalLink href="https://github.com/bobinrinder/me">
                Get this template on Github
              </ExternalLink>
            </p>
          </div>
          <div className="col-lg-4 col-md-12 text-secondary text-center">
            <p className="pb-2">
              Built with{" "}
              <ExternalLink href="https://www.gatsbyjs.org/">
                Gatsby
              </ExternalLink>{" "}
              in Vancouver, BC
            </p>
          </div>
          <div className="col-lg-4 col-md-12 text-secondary text-center text-lg-right">
            <p className="pb-2">© {new Date().getFullYear()} Robin Binder</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
