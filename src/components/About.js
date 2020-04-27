import React from "react"
import ExternalLink from "./ExternalLink"

const About = () => {
  return (
    <>
      <div className="container">
        <hr className="m-0" />
      </div>
      <div className="py-2" id="features-01">
        <div className="container py-5 my-3">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-5">About Me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Personal History</h3>
              <p className="text-secondary mb-3 mr-3">
                Raised in the suburbs of Stuttgart, Germany I moved to
                Vancouver, Canada after a sabbatical year of exploring. <br />
                My fascination for technology and programming started at a young
                age and it still excites me so much that it makes me forget the
                world around me for a bit.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Work History</h3>
              <table className="table">
                <tr>
                  <td>2018 - 2020</td>
                  <td>
                    Technical Lead at{" "}
                    <ExternalLink href="https://m56studios.com">
                      m56 Studios
                    </ExternalLink>
                  </td>
                </tr>
                <tr>
                  <td>2015 - 2018</td>
                  <td>
                    Lead Software Engineer at{" "}
                    <ExternalLink href="https://coupcompany.com">
                      The Coup Company
                    </ExternalLink>
                  </td>
                </tr>
                <tr>
                  <td>2011 - 2013</td>
                  <td>
                    Software Engineer at{" "}
                    <ExternalLink href="https://peterhahn.com">
                      Peter Hahn GmbH
                    </ExternalLink>
                  </td>
                </tr>
                <tr>
                  <td>2008 - 2011</td>
                  <td>
                    Cooporative Student at{" "}
                    <ExternalLink href="https://peterhahn.com">
                      Peter Hahn GmbH
                    </ExternalLink>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
