import React from "react"
import ExternalLink from "./ExternalLink"

const About = () => {
  return (
    <>
      <div className="container" id="about">
        <hr className="m-0" />
      </div>
      <div className="py-2">
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
                Raised in the suburbs of Stuttgart my fascination for technology
                and programming started early. Turning this passion into my
                profession has always been my dream. After finishing university
                in 2011 I developed software for a fashion retail company for
                two years. But the hunger to explore and to reinvent who I was
                pushed me to a sabbatical travelling the world for nearly 2
                years. Although it was only meant to be a temporary stopover on
                my trip in 2015 I fell in love with the city of Vancouver and
                happily call it my home ever since.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Work History</h3>
              <table className="table">
                <tbody>
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
                      Cooperative Student at{" "}
                      <ExternalLink href="https://www.dhbw-stuttgart.de/zielgruppen/international-visitors/overview/">
                        DHBW Stuttgart
                      </ExternalLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Key Abilities</h3>
              <ul className="pl-3">
                <li>Full stack development of web and native applications</li>
                <li>
                  Hiring international and local talents from junior to senior
                  level
                </li>
                <li>
                  Setting tech stack direction based on projects requirements
                </li>
                <li>
                  Overseeing architecture, database design and testing processes
                </li>
                <li>Training and mentoring engineers of all levels</li>
                <li>
                  Estimating efforts for large scale web and native applications
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Work Approach</h3>
              <ul className="pl-3">
                <li>Follow best practices on a cutting edge tech stack</li>
                <li>Hands on for setup, training and challenging problems</li>
                <li>
                  Ensuring high code quality through peer reviews and automated
                  tests
                </li>
                <li>
                  Selecting the right tools to avoid reinventing the wheel
                </li>
                <li>
                  Continuous refactor to avoid technical debt and ensure
                  scalability
                </li>
                <li>On time and on budget delivery</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default About
