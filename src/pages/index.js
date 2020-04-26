import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { globalHistory } from "@reach/router/lib/history"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandSpock, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"
import { Tooltip } from "reactstrap"
import ContactForm from "../components/ContactForm"
import Work from "../components/Work"

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
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Personal History</h3>
              <p className="text-secondary mb-3 mr-3">
                Raised in the suburbs of Stuttgart, Germany I moved to
                Vancouver, Canada after a sabbatical year of exploring. Working
                on different ideas around technology has been my passion since I
                was very young.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <h3 className="h5 mb-3">Work History</h3>
              <p className="text-secondary mb-3 mr-3">
                2018 - Current Technical Lead at m56 Studios
                <br />
                2015 - 2018 Lead Software Engineer at The Coup Company
                <br />
                2014 Sabbatical
                <br />
                2011 - 2013 Software Engineer at Peter Hahn GmbH
                <br />
                2008 - 2011 Corporative Student at Peter Hahn GmbH
              </p>
            </div>
          </div>
        </div>
      </div>

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
