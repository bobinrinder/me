import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
// import SEO from "../components/seo"
// import { globalHistory } from "@reach/router/lib/history"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandSpock, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"
import { Tooltip } from "reactstrap"
import ContactForm from "../components/ContactForm"
import About from "../components/About"
import Work from "../components/Work"
import Footer from "../components/Footer"
import ExternalLink from "../components/ExternalLink"

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
                <ExternalLink href="https://en.wikipedia.org/wiki/Swabian_German">
                  swabian
                </ExternalLink>{" "}
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

      <About />

      <Work />

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

      <ContactForm />

      <Footer />
    </Layout>
  )
}

export default IndexPage
