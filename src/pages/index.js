import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { globalHistory } from "@reach/router/lib/history"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHandSpock,
  faAngleRight,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"
import { Tooltip } from "reactstrap"
import ContactForm from "../components/ContactForm"

const IndexPage = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen)

  return (
    <Layout>
      <div
        id="hero-01"
        style={{
          background:
            "url('https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587622044/me3-right.fw-min_jdvazh.png') center top",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container d-flex flex-column"
          style={{ minHeight: "105vh" }}
        >
          <div className="row my-auto">
            <div className="col-lg-5 col-md-8 col-sm-12">
              <h3
                className="display-3 font-weight-normal mr-2"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  display: "inline",
                }}
              >
                Hallöle
              </h3>

              <span href="#" id="HelloTooltip">
                <FontAwesomeIcon
                  color="#ffc107"
                  icon={faInfoCircle}
                  size="lg"
                  style={{ position: "relative", bottom: "40px" }}
                />
              </span>
              <Tooltip
                placement="right"
                isOpen={tooltipOpen}
                target="HelloTooltip"
                toggle={toggleTooltip}
                autohide={false}
              >
                <a
                  href="https://en.wikipedia.org/wiki/Swabian_German"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  swabian
                </a>{" "}
                for "hello"
              </Tooltip>
              <h4
                className="font-weight-normal mb-5 mt-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                I'm{" "}
                <Link
                  to="features-01"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href="#about">Robin</a>
                </Link>
                , a software engineer
                <br />
                <br />I am building{" "}
                <Link
                  to="content-01"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href="#about">apps and websites</a>
                </Link>{" "}
                for corporations, celebrities and non-profits
              </h4>
              <Link
                activeClass="active"
                to="footer-01"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <a className="btn btn-warning btn-lg mr-2" href="#">
                  <FontAwesomeIcon icon={faHandSpock} className="mr-2" /> Say Hi
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Education</h3>
              <p className="text-secondary lead mb-3 mr-3">Lorem Ipsum</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Work history</h3>
              <p className="text-secondary lead mb-3 mr-3">Lorem Ipsum</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Spare time</h3>
              <p className="text-secondary lead mb-3 mr-3">Lorem Ipsum</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Location</h3>
              <p className="text-secondary lead mb-3 mr-3">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-5"
        id="content-01"
        style={{
          backgroundColor: "#310935",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container d-flex flex-column"
          style={{ minHeight: "95vh" }}
        >
          <div className="row my-auto">
            <div className="col-lg-4 col-md-10 col-sm-12 mr-auto py-4">
              <img
                src="http://telus2014-dev.localdev.dimerocker.com/app/img/rebrand/storyhive-logo.svg"
                width="250"
              />
              <p className="lead pb-4 text-white my-5">
                STORYHIVE is a community-powered funding program for emerging
                content creators in Canada.
              </p>
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
            <div className="col-lg-4 col-md-10 col-sm-12 py-4">
              <img
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587920443/storyhive-screenshot_i9bvcu.png"
                width="300"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="content-02">
        <div
          className="container-fluid"
          // style={{
          //   backgroundColor: "#028996",
          //   minHeight: "100vh",
          // }}
        >
          <div
            className="row mt-3"
            style={{
              backgroundColor: "#028996",
              minHeight: "100vh",
            }}
          >
            <div className="col-lg-6 col-md-12 col-sm-12 m-auto py-5 my-5 text-center">
              <img
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587878885/fit52-screenshot-high_c7kv9v.png"
                width="300"
                className="justify-content-center align-self-center"
              />
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12 m-auto py-5 my-5 text-left">
              <img
                src="https://fit52.com/static/fit52-hero-branding-137e247b315da9be665666e32e788aa3.png"
                width="150"
              />
              {/* <h5 className="mb-3 pb-0">Client: Carrie Underwood</h5> */}
              <p className="my-5 lead text-white">
                fit52 is a community-powered fitness platform that makes it easy
                for you to find your path to a stronger, healthier you, 52 weeks
                of the year. Inspired by Carrie Underwood’s passion for an
                active lifestyle, fit52 follows her fitness routines to help
                nourish your body mind and soul to achieve your personal
                wellness goals.
              </p>
              <a
                href="https://apps.apple.com/app/apple-store/id1475006543?mt=8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Download from the App Store"
                  width="150"
                  src="data:image/png;base64,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"
                  class="css-0"
                ></img>
              </a>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-light" id="technologies-01">
        <div className="container py-4 mt-5">
          <div className="row mb-3 text-center">
            <div className="col">
              <h2 className="display-4 mb-2">Technologies</h2>
              <p className="lead text-secondary mb-5 pb-2">
                My areas of expertise{" "}
              </p>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-lg-12 mx-auto text-center">
              <div className="card-group mb-4">
                <div className="card pt-5 mb-3 border-white">
                  <div className="card-body text-center">
                    <h4 className="mb-3">Web</h4>
                    <p className="mb-2 text-secondary lead mx-3">
                      {" "}
                      Lorem Ipsum
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center py-4">
                    <a className="btn-link h4 text-secondary p-2" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="card pt-5 mb-3 border-white mx-1">
                  <div className="card-body text-center">
                    <h4 className="mb-3">Native</h4>
                    <p className="mb-2 text-secondary lead mx-3">Lorem Ipsum</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center py-4">
                    <a className="btn-link h4 text-secondary p-2" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="card pt-5 mb-3 border-white">
                  <div className="card-body text-center">
                    <h4 className="mb-3">Backend</h4>
                    <p className="mb-2 text-secondary lead mx-3">Lorem Ipsum</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center py-4">
                    <a className="btn-link h4 text-secondary p-2" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-lg-12 mx-auto text-center">
              <div className="card-group mb-4">
                <div className="card pt-5 mb-3 border-white"></div>
                <div className="card pt-5 mb-3 border-white">
                  <div className="card-body text-center">
                    <h4 className="mb-3">CI/CD</h4>
                    <p className="mb-2 text-secondary lead mx-3">Lorem Ipsum</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center py-4">
                    <a className="btn-link h4 text-secondary p-2" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="card pt-5 mb-3 border-white">
                  <div className="card-body text-center">
                    <h4 className="mb-3">DevOps</h4>
                    <p className="mb-2 text-secondary lead mx-3">Lorem Ipsum</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center py-4">
                    <a className="btn-link h4 text-secondary p-2" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="card pt-5 mb-3 border-white">
                  <div className="card-body text-center">
                    <h4 className="mb-3">Analytics</h4>
                    <p className="mb-2 text-secondary lead mx-3">Lorem Ipsum</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center py-4">
                    <a className="btn-link h4 text-secondary p-2" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-5" id="content-03">
        <ContactForm />
      </div>
      <div className="pt-5 pb-1" id="footer-01">
        <div className="container">
          {/* <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 text-center text-lg-left">
              <ul className="list-inline my-4 my-0">
                <li className="list-inline-item">
                  <a className="btn-link h3 text-secondary p-1" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-link h3 text-secondary p-1" href="#">
                    <i className="fa fa-facebook-official"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-link h3 text-secondary p-1" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-link h3 text-secondary p-1" href="#">
                    <i className="fa fa-behance-square"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-link h3 text-secondary p-1" href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="row">
            <div className="col">
              <hr className="mb-4" />
            </div>
          </div>
          <div className="row">
            <div class="col-lg-4 col-md-12 text-secondary text-center text-lg-left">
              <p class="pb-2"></p>
            </div>
            <div className="col-lg-4 col-md-12 text-secondary text-center">
              <p className="pb-2">Made with ♥ in Vancouver, BC</p>
            </div>
            <div class="col-lg-4 col-md-12 text-secondary text-center text-lg-right">
              <p class="pb-2">© 2020 Robin Binder</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
