import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Work = () => {
  return (
    <>
      <div id="content-02">
        <div className="container-fluid">
          <div
            className="row mt-3"
            style={{
              backgroundColor: "#028996",
              minHeight: "100vh",
            }}
          >
            <div className="col-lg-6 col-md-12 col-sm-12 m-auto py-5 my-5 text-center">
              <img
                alt="fit52 Screenshot"
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587878885/fit52-screenshot-high_c7kv9v.png"
                width="300"
                className="justify-content-center align-self-center"
              />
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12 m-auto py-5 my-5 text-left">
              <img
                alt="fit52 Logo"
                src="https://fit52.com/static/fit52-hero-branding-137e247b315da9be665666e32e788aa3.png"
                width="150"
              />
              {/* <h5 className="mb-3 pb-0">Client: Carrie Underwood</h5> */}
              <p className="my-4 lead text-white">
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
                  alt="Download fit52 from the App Store"
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

      <div
        className="py-5"
        id="content-01"
        style={{
          backgroundColor: "rgb(231, 100, 37)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container d-flex flex-column"
          style={{ minHeight: "95vh" }}
        >
          <div className="row my-auto">
            <div className="col-lg-4 col-md-10 col-sm-12 mr-auto py-4">
              <svg x="0px" y="0px" viewBox="0 0 457 194.6" xmlSpace="preserve">
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
              <p className="lead pb-4 my-4 text-white">
                Fudos is building a community for foodies. We support chefs of
                all abilities, and welcome you to share your home recipes,
                explore favorite dishes, and inspire each other for the love of
                food.
              </p>
              <a
                className="btn btn-light btn-lg"
                href="https://www.storyhive.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(231, 100, 37)" }}
              >
                fudos.recipes
                <FontAwesomeIcon icon={faAngleRight} className="ml-2" />{" "}
              </a>
            </div>
            <div className="col-lg-4 col-md-10 col-sm-12 py-4">
              <img
                alt="Fudos Screenshot"
                src="https://res.cloudinary.com/robinbinder/image/upload/v1587923085/fudos-screenshot-2-min_six0na.png"
                width="300"
              />
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
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587921026/storyhive-logo_x4wwwp.svg"
                width="250"
              />
              <p className="lead pb-4 text-white my-4">
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
                alt="Storyhive Screenshot"
                src="https://res.cloudinary.com/robinbinder/image/upload/f_auto,q_auto/v1587920443/storyhive-screenshot_i9bvcu.png"
                width="300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
