import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandSpock, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"
import { Tooltip } from "reactstrap"
import ExternalLink from "./ExternalLink"

const Hero = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen)

  return (
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
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.6rem",
              }}
            >
              I'm{" "}
              <Link
                to="features-01"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href="#about"
              >
                Robin
              </Link>
              , a software engineer
              <br />
              <br />I am building{" "}
              <Link
                to="work-01"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href="#about"
              >
                apps and websites
              </Link>{" "}
              for corporations, celebrities and non-profits
            </h4>
            <Link
              activeClass="active"
              className="btn btn-warning btn-lg mr-2"
              href="#contact"
              to="footer-01"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <FontAwesomeIcon icon={faHandSpock} className="mr-2" /> Say Hi
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
