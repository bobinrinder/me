import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSpock, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "reactstrap";
import ExternalLink from "./ExternalLink";
import AnchorLink from "./AnchorLink";

const Hero = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  return (
    <div id="hero">
      <div
        className="container d-flex flex-column"
        style={{ minHeight: "105vh" }}
      >
        <div className="row my-auto">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <h3
              className="display-3 font-weight-normal mr-2"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                display: "inline",
              }}
            >
              Hallole
            </h3>

            <span href="#" id="HelloTooltip" {...({} as any)}>
              <FontAwesomeIcon
                color="#FF4500"
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
              I'm <AnchorLink to="about">Robin</AnchorLink>
              , a software engineer
              <br />
              <br />I am building{" "}
              <AnchorLink to="work">apps and websites</AnchorLink> for
              corporations, celebrities and non-profits
            </h4>
            <AnchorLink className="btn btn-warning btn-lg mr-2" to="contact">
              <FontAwesomeIcon icon={faHandSpock} className="mr-2" /> Say Hi
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
