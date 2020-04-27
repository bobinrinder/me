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
          <div class="col-lg-4 col-md-12 text-secondary text-center text-lg-left">
            <p class="pb-2">
              <ExternalLink href="http://github.com/bobinrinder/me">
                Get this template on Github
              </ExternalLink>
            </p>
          </div>
          <div className="col-lg-4 col-md-12 text-secondary text-center">
            <p className="pb-2">Made with ♥ in Vancouver, BC</p>
          </div>
          <div class="col-lg-4 col-md-12 text-secondary text-center text-lg-right">
            <p class="pb-2">© {new Date().getFullYear()} Robin Binder</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
