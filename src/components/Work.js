import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { LazyLoadImage } from "react-lazy-load-image-component"
import AppStoreButton from "./AppStoreButton"
import { Table, Container, Row, Col } from "reactstrap"

const Work = () => {
  return (
    <div id="work">
      <Container
        id="work-01"
        fluid
        style={{
          backgroundColor: "#028996",
        }}
      >
        <Container>
          <Row
            className="mt-3"
            style={{
              backgroundColor: "#028996",
              minHeight: "100vh",
            }}
          >
            <div className="col-lg-4 col-md-12 col-sm-12 m-auto py-5 my-5 text-center">
              <LazyLoadImage
                alt="fit52 Screenshot"
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587878885/fit52-screenshot-high_c7kv9v.png"
                width="300"
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 m-auto py-5 my-5 text-left">
              <LazyLoadImage
                alt="fit52 Logo"
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587958064/fit52-logo_ddbbu6.png"
                width="150"
              />
              <Row>
                <Col lg="6">
                  <p className="my-4 text-white">
                    fit52 is a community-powered fitness platform that makes it
                    easy for you to find your path to a stronger, healthier you,
                    52 weeks of the year. Inspired by Carrie Underwood’s passion
                    for an active lifestyle, fit52 follows her fitness routines
                    to help nourish your body mind and soul to achieve your
                    personal wellness goals.
                  </p>
                </Col>
                <Col lg="6">
                  <Table className="mt-2">
                    <tbody>
                      <tr>
                        <td className="text-white border-0">Users</td>
                        <td className="text-white border-0">> 100k</td>
                      </tr>
                      <tr>
                        <td className="text-white">Stack</td>
                        <td className="text-white">React Native and Laravel</td>
                      </tr>
                      <tr>
                        <td className="text-white">Role</td>
                        <td className="text-white">Technical Lead</td>
                      </tr>
                      <tr>
                        <td className="text-white">Team Size</td>
                        <td className="text-white">10</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <AppStoreButton
                href="https://apps.apple.com/app/apple-store/id1475006543?mt=8"
                alt="Download fit52 from the App Store"
              />
            </div>
          </Row>
        </Container>
      </Container>

      <Container
        id="work-02"
        fluid
        style={{
          backgroundColor: "#310935",
        }}
      >
        <Container>
          <Row
            style={{
              backgroundColor: "#310935",
              minHeight: "100vh",
            }}
          >
            <div className="col-lg-4 col-md-12 col-sm-12 m-auto py-5 my-5 text-center">
              <LazyLoadImage
                alt="Storyhive Screenshot"
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1589346788/telus-storyhive-screenshot-1_m4hwib.png"
                width="300"
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 m-auto py-5 my-5 text-left">
              <LazyLoadImage
                alt="fit52 Logo"
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587921026/storyhive-logo_x4wwwp.svg"
                width="150"
              />
              <Row>
                <Col lg="6">
                  <p className="my-4 text-white">
                    STORYHIVE has funded productions and supported emerging
                    filmmakers with mentorship and support from the National
                    Screen Institute, bringing hundreds of films to life online
                    and around the world. Over the years the platform was the
                    base for over 5 million dollars in funding that helped
                    kickstart promising careers of creatives.
                  </p>
                </Col>
                <Col lg="6">
                  <Table className="mt-3">
                    <tbody>
                      <tr>
                        <td className="text-white border-0">Users</td>
                        <td className="text-white border-0">> 2m</td>
                      </tr>
                      <tr>
                        <td className="text-white">Stack</td>
                        <td className="text-white">JavaScript and Zend</td>
                      </tr>
                      <tr>
                        <td className="text-white">Role</td>
                        <td className="text-white">Lead Engineer</td>
                      </tr>
                      <tr>
                        <td className="text-white">Team Size</td>
                        <td className="text-white">8</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <a
                className="btn btn-light btn-lg"
                href="https://www.storyhive.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                storyhive.com
                <FontAwesomeIcon icon={faAngleRight} className="ml-2" />{" "}
              </a>
            </div>
          </Row>
        </Container>
      </Container>

      <Container
        id="work-03"
        fluid
        style={{
          backgroundColor: "rgb(231, 100, 37)",
        }}
      >
        <Container>
          <Row
            style={{
              backgroundColor: "rgb(231, 100, 37)",
              minHeight: "100vh",
            }}
          >
            <div className="col-lg-4 col-md-12 col-sm-12 m-auto py-5 my-5 text-center">
              <LazyLoadImage
                alt="Fudos Screenshot"
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1589348669/fudos-screenshot-1_tm5hh6.png"
                width="300"
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 m-auto py-5 my-5 text-left">
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 457 194.6"
                xmlSpace="preserve"
                width="150"
              >
                <g id="Layer_3"></g>
                <g id="Layer_1">
                  <g>
                    <g>
                      <path
                        d="M110.7,0.2c0.9,0.2,1.8,0.5,2.7,0.8c3.9,1.3,7.1,3.4,9.8,6.5c2.2,2.6,3.9,5.3,4.9,8.5 c0.8,2.5,1,5.1,1,7.8c0,1.8-0.1,3.5-0.4,5.2c-0.8,5.4-2.3,10.5-4.8,15.3c-2.2,4.2-4.9,8-7.3,12.1c-2.6,4.3-5.4,8.5-7.3,13.2 c-1.3,3.1-2.1,6.3-2.9,9.6c-1.1,4.5-1.2,9.1-1.8,13.7c-0.3,2.3-0.4,4.7-0.6,7c-0.3,3.4-0.4,6.9-0.8,10.3 c-0.2,2.4-0.4,4.9-0.5,7.3c-0.2,2.9-0.3,5.8-0.5,8.7c-0.1,1.7-0.2,3.3-0.3,5c-0.2,3.8-0.4,7.6-0.7,11.3c-0.1,2.3-0.3,4.6-0.5,6.9 c-0.3,3.4-0.7,6.8-1,10.2c-0.3,3-0.6,5.9-1,8.9c-0.5,3.6-1,7.2-1.6,10.7c-0.6,3.3-1.2,6.7-2.6,9.8c-1.3,2.9-3.1,5.1-6.4,5.7 c-0.4,0-0.7-0.1-1.1-0.1c-2.9-1.6-4-4.2-4.7-7.2c-0.6-2.7-0.5-5.4-0.5-8.1c0-3,0.2-6,0.4-9.1c0.1-1.1,0.2-2.3,0.3-3.4 c0.8-8.2,1.8-16.4,2.9-24.6c0.5-3.5,1-7.1,1.6-10.6c0.7-4.6,1.5-9.1,2.3-13.7c0.8-4.2,1.4-8.4,2-12.6c1.2-8.1,2.2-16.2,3.1-24.3 c0.7-6.5,0.2-13-1.5-19.4c-1.2-4.5-3-8.8-4.7-13.1c-1.6-4.1-3.1-8.3-3.8-12.8c-0.4-2.8-0.5-5.7-0.3-8.6c0.2-3.3,0.8-6.4,1.8-9.5 c2.2-6.2,5.8-11.2,11.6-14.5c3.5-2,7.3-3,11.4-2.9c0.1,0,0.3,0,0.5-0.1C109.8,0.1,110.2,0.1,110.7,0.2z"
                        style={{ fill: "#fff" }}
                      ></path>
                    </g>
                    <path
                      d="M32.7,91.4c0,0,25.1-12.6,25.1-44c0.4-4.6,3.2-8.4,6.9-9.4c5-1.4,11.4,2.5,12.6,9.4 c1.1,5,2,10.6,2.5,17c0.6,7.5,0.5,14.3,0,20.1c0,0,35.5-0.4,39,0c3.4,0.4,7.2,2.4,8.8,8.8c1.4,5.8-2.1,12.5-8.8,15.1 c5.3,2.4,8,8.4,6.3,13.8c-1.8,5.7-7.9,9.1-13.8,7.5c4.5,4,5.4,10.5,2.5,15.1c-2.3,3.6-6.7,5.6-11.3,5c3.3,2.3,4.3,6.7,2.5,10.1 c-1.6,3-4.5,3.1-8.8,3.8c-13,1-28.5,0.4-45.3-3.8c-3.1-0.8-6-1.6-8.8-2.5c-2.9-1.3-5.9-2.5-8.8-3.8L32.7,91.4z"
                      style={{ fill: "#fff" }}
                    ></path>
                    <path
                      d="M30.7,158.3h-9.8C9.4,158.3,0,148.9,0,137.4v-47c0-1.7,1.4-3.1,3.1-3.1h27.1c1.7,0,3.1,1.4,3.1,3.1 v65.3C33.4,157.1,32.2,158.3,30.7,158.3z"
                      style={{ fill: "#fff" }}
                    ></path>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M207.8,66.5l-3.5,13l-2.6-0.9c-3-1.1-5.2-1.8-8.5-1.8c-5.9,0-8.4,1.5-8.4,16.8v5.2h15.5V112h-15.5v50.7h-14.7V112h-12 v-11.1l12-1.8v-6.7c0-19.8,7.5-29,23.7-29c4.1,0,7.5,0.9,11.7,2.3L207.8,66.5z"
                        style={{ fill: "#fff" }}
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M260.1,98.8v63.8h-11.8l-1.2-8.2c-4.8,5-11.3,9.6-21,9.6c-6.4,0-11.5-2-14.7-5.7l0-0.1c-3.2-3.9-4.7-8.7-4.7-15V98.8 h14.7v44.2c0,3.8,1.5,7.9,5.8,7.9c5.7,0,14.7-7.5,18.2-13.6V98.8H260.1z"
                        style={{ fill: "#fff" }}
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M313.3,65v35.7c-4-2-9.5-3.3-14.8-3.3c-14.5,0-30.2,10.9-30.2,34.7c0,19.7,11.7,32,30.4,32c6.3,0,12.7-2.6,16.8-5.8 l0.6,4.4h11.8V65H313.3z M298.6,110.5c6.8,0,11.6,2,14.8,6v27.2c-3.6,4.4-9.2,7.2-14.5,7.2c-10,0-15.5-6.7-15.5-18.9 C283.3,119,289.3,110.5,298.6,110.5z"
                        style={{ fill: "#fff" }}
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M368.7,97.4c-22.4,0-32.4,16.8-32.4,33.4c0,20.3,12.7,33.4,32.3,33.4c16.1,0,32.3-10.3,32.3-33.4 C400.8,110.2,388.5,97.4,368.7,97.4z M368.6,151c-11,0-17.3-7.4-17.3-20.2c0-13.6,5.7-20.2,17.4-20.2c10.9,0,17.2,7.4,17.2,20.2 C385.9,144.2,380.1,151,368.6,151z"
                        style={{ fill: "#fff" }}
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M453.7,144.4c0,7.4-3.5,19.7-26.6,19.7c-6.9,0-15.8-2.4-20.6-5.6l-1.7-1.1l5-12.1l2.5,1.3c3.8,2,9.5,4.4,15.3,4.4 c10.6,0,11.5-2.9,11.5-6.2c0-5-2.1-6.7-12.4-10.2c-10.9-3.7-19.2-7.5-19.2-18.4c0-11.6,9.4-18.8,24.7-18.8c7.2,0,13.4,1.3,18.8,4 l2,1l-4.3,12.3l-2.5-1.1c-4.9-2.2-8.9-3-14.2-3c-9,0-9.7,2.5-9.7,5.5c0,2.3,2.6,3.4,9.4,5.6c1.1,0.4,2.4,0.8,3.6,1.2 C447.8,127.3,453.7,134.2,453.7,144.4z"
                        style={{ fill: "#fff" }}
                      ></path>
                    </g>
                  </g>
                </g>
                <g id="Layer_2"></g>
              </svg>
              <Row>
                <Col lg="6">
                  <p className="my-4 text-white">
                    Fudos is building a community for foodies that supports
                    chefs of all abilities, and welcomes you to share your home
                    recipes, explore favorite dishes, and inspire each other for
                    the love of food. Competitions with celebrity chefs and
                    great prizes await. Create content with the iOS app or vote
                    for recipes on the web portal.
                  </p>
                </Col>
                <Col lg="6">
                  <Table className="mt-2">
                    <tbody>
                      <tr>
                        <td className="text-white border-0">Users</td>
                        <td className="text-white border-0">> 20k</td>
                      </tr>
                      <tr>
                        <td className="text-white">Stack</td>
                        <td className="text-white">React and Laravel</td>
                      </tr>
                      <tr>
                        <td className="text-white">Role</td>
                        <td className="text-white">Technical Lead</td>
                      </tr>
                      <tr>
                        <td className="text-white">Team Size</td>
                        <td className="text-white">8</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <a
                className="btn btn-light btn-lg"
                href="https://fudos.recipes"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(231, 100, 37)" }}
              >
                fudos.recipes
                <FontAwesomeIcon icon={faAngleRight} className="ml-2" />{" "}
              </a>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Work
