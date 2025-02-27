import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";
import useScrollPosition from "@react-hook/window-scroll";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import ExternalLink from "./ExternalLink";
import AnchorLink from "./AnchorLink";

const TopNavigation = () => {
  const scrollY = useScrollPosition(30);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const isNavTransparent = scrollY < 15 && !isOpen;

  return (
    <header>
      <Navbar
        light
        fixed="top"
        expand="lg"
        className={isNavTransparent ? "" : " bg-white"}
        style={
          isNavTransparent
            ? undefined
            : { boxShadow: "0 0 3px rgba(0, 0, 0, 0.3)" }
        }
      >
        <a
          className="navbar-brand p-0"
          href="#top"
          onClick={() =>
            scroll.scrollToTop({
              duration: 500,
              smooth: true,
            })
          }
        >
          <FontAwesomeIcon icon={faUserAstronaut} className="mr-2" /> Robin
          Binder
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <AnchorLink className="nav-link" to="about">
                About Me
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink className="nav-link" to="work">
                Work
              </AnchorLink>
            </NavItem>
            {/* <NavItem>
              <AnchorLink className="nav-link" to="technologies">
                Technologies
              </AnchorLink>
            </NavItem> */}
            <NavItem>
              <AnchorLink className="nav-link" to="contact">
                Contact
              </AnchorLink>
            </NavItem>
          </Nav>
          <ExternalLink
            href="https://github.com/bobinrinder"
            showExternalIcon={false}
            aria-label="Robin Binder Github Link"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-3" size="2x" />
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/robin-binder-34a47734/"
            showExternalIcon={false}
            aria-label="Robin Binder Linkedin Link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="2x" />
          </ExternalLink>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default TopNavigation;
