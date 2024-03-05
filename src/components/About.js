import React from "react"
import ExternalLink from "./ExternalLink"
import { Container, Row, Col, Table } from "reactstrap"

const About = () => {
  return (
    <div id="about">
      <Container id="about-01">
        <hr className="m-0" />
      </Container>
      <Container className="py-5 my-3">
        <Row>
          <Col className="text-center">
            <h1 className="mb-5">About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" className="mb-3">
            <h2 className="h5 mb-3">Personal History</h2>
            <p className="text-secondary mb-3 mr-3">
              Raised in the suburbs of Stuttgart, Germany, my fascination with
              technology and programming started early. After earning a degree
              in Business Information Systems, I turned my passion into a career
              and began working in software development. Following two years of
              working for a fashion retail company, I decided to take a
              sabbatical and travel the world for two years. Although Vancouver
              was meant to be a stopover in 2015, I fell in love with the city
              and its emerging tech industry. I've happily called it home ever
              since.
            </p>
          </Col>
          <Col lg="6" md="6" sm="12" className="mb-3">
            <h3 className="h5 mb-3">Work History</h3>
            <Table>
              <tbody>
                <tr>
                  <td>2020 - 2024</td>
                  <td>
                    Head of Engineering at{" "}
                    <ExternalLink href="https://m56studios.com">
                      m56 Studios
                    </ExternalLink>
                  </td>
                </tr>
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
                {/* <tr>
                  <td>2008 - 2011</td>
                  <td>
                    Cooperative Student at{" "}
                    <ExternalLink href="https://www.dhbw-stuttgart.de/zielgruppen/international-visitors/overview/">
                      DHBW Stuttgart
                    </ExternalLink>
                  </td>
                </tr> */}
              </tbody>
            </Table>
          </Col>
        </Row>
        {/* <Row>
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
          </Row> */}
      </Container>
    </div>
  )
}

export default About
