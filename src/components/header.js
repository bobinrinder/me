import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons"
import { Link, scrollToTop } from "react-scroll"
import useScrollPosition from "@react-hook/window-scroll"

const Header = () => {
  const scrollY = useScrollPosition(30)
  return (
    <header>
      <nav
        className={
          "navbar navbar-expand-lg fixed-top navbar-light" +
          (scrollY > 15 ? " bg-white" : "")
        }
        style={
          scrollY > 15 ? { boxShadow: "0 0 3px rgba(0, 0, 0, 0.3)" } : null
        }
      >
        <a className="navbar-brand p-0" href="#" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faUserAstronaut} className="mr-2" /> Robin
          Binder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item mx-1">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li> */}
            <li className="nav-item mx-1">
              <Link
                activeClass="active"
                to="features-01"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link
                activeClass="active"
                to="content-01"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <a className="nav-link" href="#work">
                  Work
                </a>
              </Link>
            </li>
            <li className="nav-item ml-1 mr-3">
              <Link
                activeClass="active"
                to="technologies-01"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <a className="nav-link" href="#technologies">
                  Technologies
                </a>
              </Link>
            </li>
            <li className="nav-item ml-1 mr-3">
              <Link
                activeClass="active"
                to="footer-01"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <a className="nav-link" href="mailto:mail@robinbinder.com">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <a
            href="https://github.com/bobinrinder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-3" size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/robin-binder-34a47734/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="2x" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
