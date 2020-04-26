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
              <h1 className="display-4 mb-0 pb-0 text-white">STORYHIVE</h1>
              <h5 className="mb-0 pb-0 text-white">Client: Telus</h5>
              <hr className="my-4" />
              <p className="lead pb-4 text-white">
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
              <svg
                height="200"
                viewBox="0 0 388 200"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="title desc"
                width="600"
              >
                <title id="title">Storyhive</title>
                <desc id="desc">Storyhive Logo</desc>
                <path
                  d="M266.52 174.773l22.168-4.408c.11-.021.186.035.2.106.015.068-.022.148-.125.175-.07.018-8.026 2.3-23.67 6.152-2.823 3.547-7.418 7.324-11.603 9.673a87.104 87.104 0 0 1-3.107 1.851c-1.217 1.896-1.847 3.6-1.847 4.94 0 .687.162 1.278.5 1.741.976 1.362 3.56 1.86 6.949.95 6.657-1.783 16.896-7.857 19.005-9.116l.096-.06c.075-.043.165-.028.207.038.034.054.027.14-.05.195l-.074.055c-1.964 1.405-10.982 8.47-18.588 10.774-2.975.9-5.584.882-7.496.122-1.285-.511-2.21-1.407-2.68-2.586a5.236 5.236 0 0 1-.353-1.944c0-.94.213-1.972.633-3.092-7.471 3.926-15.713 7.453-20.651 9.334l-.853.327 1.493-4.014.187-.065c7.764-2.636 15.581-6.007 21.714-9.286 1.583-2.435 3.485-4.81 5.751-7.218l-23.603 5.734 1.124-3.023 25.144-5.397a102.57 102.57 0 0 1 4.013-3.645c1.365-1.183 3.854-3.171 5.199-3.247a1.44 1.44 0 0 1 1.138.437c.283.285.445.67.445 1.043 0 .033 0 .068-.002.097-.074.998-.528 2.142-1.263 3.357zm-4.59 2.8l-.808.196-.09.019v-1.924l2.95-.586c1.47-1.85 1.808-2.894 1.92-3.17.126-.31.004-.48-.423-.205-1.227.795-3.074 2.24-5.121 4.105l.585-.125.137-.03v1.925l-.048.01-3.375.82c-1.948 1.982-3.913 4.227-5.58 6.562 2.615-1.545 3.908-2.381 5.724-3.869 1.716-1.407 3.066-2.648 4.13-3.728zM23.56 130.805c2.28.865 4.63 1.896 6.378 3.575 2.857 2.706 3.456 6.24 3.456 8.726 0 4.574-1.55 8.898-4.146 11.565-3.015 3.164-7.474 4.77-13.25 4.77-3.68 0-6.531-.606-9.246-1.96-2.411-1.205-4.968-3.273-6.555-4.806a.648.648 0 0 1-.068-.855l4.98-6.84a.661.661 0 0 1 .473-.268.67.67 0 0 1 .513.181c1.1 1.049 2.726 2.423 3.882 3.129 1.818 1.117 3.643 1.638 5.742 1.638 1.345 0 3.26-.269 4.748-1.552.6-.508 1.607-1.65 1.607-3.615 0-1.319-.46-2.275-1.537-3.198-1.208-1.006-3.98-2.026-5.313-2.516l-.051-.02-3.817-1.316c-2.214-.784-4.726-1.783-6.53-3.722-1.9-2.006-2.823-4.677-2.823-8.164 0-4.273 1.333-7.716 4.077-10.525 2.905-2.962 6.478-4.283 11.583-4.283 4.99 0 9.4 1.42 13.483 4.34a.666.666 0 0 1 .178.889l-4.257 6.902a.663.663 0 0 1-.986.146c-2.3-1.933-4.734-2.913-7.236-2.913-1.289 0-3.144.159-4.385 1.537a3.966 3.966 0 0 0-1.137 2.797c0 1.046.321 1.843.984 2.438.86.805 2.057 1.24 4.037 1.96.522.19 1.1.4 1.742.643l3.474 1.317zm45.572-19.016c.362 0 .658.295.658.656v8.051a.658.658 0 0 1-.658.657h-9.103a.31.31 0 0 0-.31.31v36.28a.659.659 0 0 1-.658.657h-9.727a.659.659 0 0 1-.658-.657v-36.28a.31.31 0 0 0-.31-.31h-9.101a.659.659 0 0 1-.658-.657v-8.05c0-.362.296-.657.658-.657h29.867zm20.181 13.06c-1.51 1.457-4.044 4.738-4.044 10.35 0 4.174 1.368 7.537 4.183 10.28 2.698 2.568 5.816 3.765 9.81 3.765 4.088 0 7.6-1.35 10.156-3.903 1.816-1.744 3.978-4.93 3.978-10.212 0-5.694-2.782-9.087-3.978-10.281-2.523-2.443-6.294-3.903-10.086-3.903-3.94 0-7.497 1.386-10.016 3.903-.001 0-.003 0-.003.002zm10.088-14.1c7.328 0 13.398 2.28 18.04 6.776 4.691 4.537 7.275 10.79 7.275 17.604 0 6.708-2.584 12.91-7.276 17.465-4.7 4.543-10.77 6.846-18.04 6.846-9.602 0-15.51-4.289-18.176-6.845-4.622-4.33-7.275-10.645-7.275-17.327 0-6.364 2.826-13.301 7.202-17.67 3.13-3.125 8.835-6.85 18.25-6.85zm46.257 10.02v11.727c0 .17.14.31.311.31h1.947c2.004 0 4.527-.223 6.266-1.961.63-.629 1.686-2.034 1.686-4.386 0-1.947-.722-3.53-2.085-4.58-1.225-.928-3.23-1.42-5.798-1.42h-2.016a.31.31 0 0 0-.31.31zm11.709 18.98l13.232 17.6a.654.654 0 0 1-.524 1.051h-11.833a.654.654 0 0 1-.543-.286l-11.475-16.742a.298.298 0 0 0-.347-.122.3.3 0 0 0-.219.296v16.197a.658.658 0 0 1-.657.657h-9.727a.658.658 0 0 1-.657-.657v-45.298c0-.361.295-.656.657-.656h15.767c6.263 0 9.942 2.213 11.926 4.07 1.526 1.47 4.083 4.78 4.083 10.461 0 4.026-1.2 7.152-3.665 9.557a14.757 14.757 0 0 1-5.849 3.395.318.318 0 0 0-.214.206.292.292 0 0 0 .045.271zm56.941-27.96a.657.657 0 0 1 .546 1.023l-16.01 23.818a.299.299 0 0 0-.053.172v20.94a.658.658 0 0 1-.657.658h-9.727a.659.659 0 0 1-.658-.657v-20.94a.294.294 0 0 0-.053-.172l-16.01-23.82a.654.654 0 0 1 .545-1.022h11.47c.225 0 .431.112.552.3l8.757 13.51c.116.181.405.181.519 0l8.76-13.51a.65.65 0 0 1 .55-.3h11.47zm47.716 0c.362 0 .658.295.658.656v45.298a.659.659 0 0 1-.658.657h-9.726a.659.659 0 0 1-.658-.657V139.08a.31.31 0 0 0-.31-.31h-17.506a.31.31 0 0 0-.31.31v18.663a.659.659 0 0 1-.659.657h-9.726a.659.659 0 0 1-.658-.657v-45.298c0-.361.296-.656.658-.656h9.726c.362 0 .658.295.658.656v16.652c0 .17.14.31.31.31h17.506c.171 0 .31-.14.31-.31v-16.652c0-.361.297-.656.659-.656h9.726zm24.881 0c.362 0 .658.295.658.656v45.298a.659.659 0 0 1-.658.657h-9.728a.658.658 0 0 1-.657-.657v-45.298c0-.361.295-.656.657-.656h9.728zm90.598 0c.362 0 .658.295.658.656v8.051a.658.658 0 0 1-.658.657h-14.519a.31.31 0 0 0-.31.31v7.98c0 .172.14.31.31.31h13.755c.362 0 .658.295.658.657v8.05a.658.658 0 0 1-.658.657h-13.755a.31.31 0 0 0-.31.31v9.299c0 .171.14.31.31.31h14.52c.361 0 .657.295.657.656v8.05a.658.658 0 0 1-.658.658H352.29a.659.659 0 0 1-.658-.657v-45.298c0-.361.296-.656.658-.656h25.214zm-57.912 28.35c.139 0 .31-.072.376-.273l18.557-55.502a.665.665 0 0 1 .63-.455h30.38a.316.316 0 0 0 .316-.316V9.725a.316.316 0 0 0-.315-.316H145.6a.317.317 0 0 0-.316.316v73.868c0 .174.142.316.316.316h153.04c.286 0 .54.183.63.455l19.946 55.501a.385.385 0 0 0 .375.274zM378.608 0c.366 0 .664.298.664.663v91.96a.663.663 0 0 1-.664.662h-31.6a.32.32 0 0 0-.299.21l-23.344 64.79a.173.173 0 0 1-.163.115h-7.222a.173.173 0 0 1-.163-.115l-24.732-64.79a.32.32 0 0 0-.299-.21h-154.26a.663.663 0 0 1-.663-.662V.663c0-.365.297-.663.663-.663h242.082zM8.436 180.16c-.455-.384-1.068-.576-1.836-.576-.656 0-1.204.12-1.645.362a2.932 2.932 0 0 0-1.058.96 4.039 4.039 0 0 0-.566 1.376 7.47 7.47 0 0 0-.17 1.61c0 .513.06 1.01.182 1.494.12.484.309.914.565 1.29.256.377.59.68 1.004.907.413.228.904.342 1.474.342.897 0 1.598-.235 2.104-.704.505-.47.814-1.131.929-1.984h1.858c-.2 1.365-.709 2.418-1.527 3.157-.82.74-1.933 1.11-3.343 1.11-.84 0-1.584-.136-2.231-.406a4.315 4.315 0 0 1-1.624-1.153 4.97 4.97 0 0 1-.983-1.78 7.417 7.417 0 0 1-.33-2.272c0-.825.106-1.596.32-2.315a5.349 5.349 0 0 1 .972-1.877 4.564 4.564 0 0 1 1.633-1.259c.655-.305 1.418-.458 2.286-.458a6.68 6.68 0 0 1 1.762.224c.548.149 1.032.38 1.453.693.42.313.765.707 1.036 1.184.27.477.441 1.042.512 1.696h-1.88c-.142-.696-.441-1.238-.897-1.621zm6.514-1.92v2.325h.043c.442-.896.983-1.557 1.623-1.984.642-.427 1.453-.626 2.436-.597v1.92c-.727 0-1.346.1-1.859.298-.512.2-.925.49-1.239.875-.313.384-.54.85-.683 1.397-.143.548-.214 1.177-.214 1.888v4.906h-1.815V178.24h1.708zm12.464 3.242a3.12 3.12 0 0 0-.662-.992 3.113 3.113 0 0 0-2.232-.907c-.47 0-.894.083-1.271.246a2.93 2.93 0 0 0-.972.672 3.2 3.2 0 0 0-.64.992c-.158.377-.25.779-.279 1.205h6.344a3.722 3.722 0 0 0-.288-1.216zm.438 7.083c-.826.625-1.866.938-3.119.938-.883 0-1.648-.143-2.296-.426a4.52 4.52 0 0 1-1.634-1.195 5.07 5.07 0 0 1-.993-1.835 8.835 8.835 0 0 1-.374-2.325c0-.839.128-1.607.385-2.304a5.506 5.506 0 0 1 1.078-1.813 4.908 4.908 0 0 1 1.645-1.195 5.033 5.033 0 0 1 2.082-.426c.983 0 1.798.202 2.446.608.648.405 1.168.92 1.56 1.547.391.625.662 1.308.811 2.047.15.74.21 1.444.181 2.112h-8.266c-.013.484.043.943.171 1.376.129.434.335.818.62 1.152.285.334.647.6 1.09.8.44.199.96.299 1.558.299.77 0 1.4-.178 1.891-.534.49-.355.815-.896.971-1.621h1.795c-.242 1.237-.776 2.17-1.602 2.795zm10.487-4.992c-.228.17-.527.294-.897.371-.37.078-.759.142-1.164.191-.406.05-.816.107-1.229.17a4.525 4.525 0 0 0-1.11.308 2.008 2.008 0 0 0-.8.605c-.208.262-.31.62-.31 1.072 0 .297.06.548.18.753.122.206.278.372.47.5.193.127.417.219.673.276.257.056.527.084.812.084.598 0 1.11-.081 1.538-.244.427-.163.776-.367 1.047-.616.27-.247.47-.516.598-.806a2.03 2.03 0 0 0 .192-.817v-1.847zm2.947 5.653c-.313.185-.747.277-1.303.277-.47 0-.843-.131-1.121-.394-.278-.264-.416-.694-.416-1.291-.5.597-1.079 1.027-1.741 1.29a5.759 5.759 0 0 1-2.147.395c-.499 0-.972-.057-1.42-.17a3.293 3.293 0 0 1-1.164-.534 2.553 2.553 0 0 1-.78-.95c-.192-.39-.288-.863-.288-1.417 0-.626.106-1.138.32-1.537.214-.397.495-.721.844-.97s.747-.437 1.196-.566c.448-.128.908-.234 1.378-.32.498-.099.971-.173 1.42-.223.448-.05.843-.121 1.185-.214.342-.092.612-.227.812-.405.2-.178.3-.437.3-.779 0-.398-.076-.718-.225-.96a1.539 1.539 0 0 0-.577-.554 2.348 2.348 0 0 0-.79-.257 6.02 6.02 0 0 0-.866-.063c-.768 0-1.409.146-1.921.437-.513.292-.79.843-.833 1.653h-1.816c.028-.682.171-1.258.427-1.728a3.24 3.24 0 0 1 1.025-1.14 4.312 4.312 0 0 1 1.464-.63 7.737 7.737 0 0 1 1.761-.192c.5 0 .994.035 1.485.106.492.071.936.217 1.335.437.399.22.719.528.962.926.241.397.362.915.362 1.553v5.663c0 .426.025.737.075.936.05.199.217.298.502.298.157 0 .341-.028.555-.085v1.408zm6.408-10.986v1.6h-2.2v6.847c0 .214.018.384.054.512a.526.526 0 0 0 .203.299c.1.071.238.117.416.139.178.02.41.032.694.032h.833v1.6h-1.388c-.47 0-.872-.032-1.207-.097-.335-.063-.605-.18-.811-.352-.207-.17-.36-.412-.46-.725-.1-.312-.15-.725-.15-1.237v-7.018H41.8v-1.6h1.88v-3.306h1.815v3.306h2.2zm2.115 11.028V178.24h1.815v11.028H49.81zm0-13.012v-2.219h1.815v2.22H49.81zm7.668 13.012l-4.101-11.028h2.029l3.097 9.194h.042l3.012-9.194h1.9l-4.036 11.028h-1.943zm7.753 0V178.24h1.815v11.028H65.23zm0-13.012v-2.219h1.815v2.22H65.23zm9.355 1.984v1.6h-2.2v6.847c0 .214.017.384.053.512a.526.526 0 0 0 .203.299c.1.071.238.117.417.139.177.02.409.032.694.032h.833v1.6h-1.389c-.47 0-.872-.032-1.207-.097-.334-.063-.605-.18-.81-.352-.208-.17-.36-.412-.46-.725-.1-.312-.15-.725-.15-1.237v-7.018h-1.88v-1.6h1.88v-3.306h1.815v3.306h2.2zm6.343 12.5c-.214.54-.424.996-.63 1.366-.207.369-.434.672-.684.906a2.318 2.318 0 0 1-.832.512c-.307.107-.66.16-1.058.16-.213 0-.427-.014-.64-.043a3.01 3.01 0 0 1-.62-.149v-1.663c.156.07.338.13.545.18.206.05.38.075.523.075.37 0 .68-.089.929-.267.25-.177.438-.43.566-.757l.748-1.856-4.379-10.964h2.05l3.226 9.023h.042l3.098-9.023h1.922l-4.806 12.5zm18.882-10.58c-.456-.384-1.068-.576-1.837-.576-.655 0-1.204.12-1.645.362a2.935 2.935 0 0 0-1.057.96 4.047 4.047 0 0 0-.566 1.376 7.497 7.497 0 0 0-.171 1.61c0 .513.06 1.01.182 1.494a4 4 0 0 0 .566 1.29c.256.377.59.68 1.004.907.412.228.903.342 1.473.342.897 0 1.599-.235 2.104-.704.506-.47.815-1.131.93-1.984h1.858c-.2 1.365-.709 2.418-1.528 3.157-.819.74-1.932 1.11-3.342 1.11-.84 0-1.585-.136-2.233-.406a4.317 4.317 0 0 1-1.623-1.153 4.984 4.984 0 0 1-.983-1.78 7.43 7.43 0 0 1-.33-2.272c0-.825.106-1.596.32-2.315a5.356 5.356 0 0 1 .972-1.877 4.568 4.568 0 0 1 1.634-1.259c.655-.305 1.417-.458 2.285-.458a6.68 6.68 0 0 1 1.762.224c.548.149 1.033.38 1.453.693.42.313.765.707 1.036 1.184.27.477.441 1.042.513 1.696h-1.88c-.143-.696-.442-1.238-.897-1.621zm6.46 5.386c.178.52.424.953.737 1.301.313.35.68.616 1.1.8.42.185.866.278 1.335.278.47 0 .915-.093 1.335-.278a3.2 3.2 0 0 0 1.1-.8c.313-.348.56-.782.737-1.3.178-.52.267-1.113.267-1.782 0-.668-.089-1.262-.267-1.781a3.869 3.869 0 0 0-.736-1.312 3.152 3.152 0 0 0-1.1-.811 3.28 3.28 0 0 0-1.336-.277c-.47 0-.915.092-1.334.277-.42.185-.788.455-1.1.81a3.854 3.854 0 0 0-.737 1.313c-.178.519-.268 1.113-.268 1.78 0 .67.09 1.263.268 1.782zm-1.847-4.053a5.142 5.142 0 0 1 1.025-1.835 4.83 4.83 0 0 1 1.688-1.226c.669-.299 1.438-.448 2.306-.448.884 0 1.656.15 2.318.448a4.854 4.854 0 0 1 1.677 1.226c.455.52.797 1.131 1.025 1.835.228.704.342 1.461.342 2.272 0 .81-.114 1.564-.342 2.261a5.158 5.158 0 0 1-1.025 1.824 4.74 4.74 0 0 1-1.677 1.216c-.662.291-1.434.437-2.318.437-.868 0-1.637-.146-2.306-.437a4.72 4.72 0 0 1-1.688-1.216 5.151 5.151 0 0 1-1.025-1.824 7.235 7.235 0 0 1-.342-2.261c0-.81.114-1.568.342-2.272zm14.225-3.253v1.75h.043c.755-1.338 1.95-2.006 3.589-2.006.725 0 1.33.1 1.815.299.483.199.875.476 1.175.832.299.355.508.778.63 1.269.12.49.181 1.034.181 1.632v7.252h-1.815v-7.466c0-.683-.2-1.223-.599-1.62-.398-.4-.946-.598-1.644-.598-.556 0-1.036.085-1.442.256a2.7 2.7 0 0 0-1.014.725c-.27.313-.474.679-.61 1.099-.135.42-.202.878-.202 1.375v6.23h-1.815v-11.03h1.708zm11.876 0v1.75h.043c.755-1.338 1.951-2.006 3.589-2.006.726 0 1.33.1 1.815.299.483.199.876.476 1.175.832.298.355.509.778.63 1.269.12.49.181 1.034.181 1.632v7.252h-1.815v-7.466c0-.683-.2-1.223-.599-1.62-.398-.4-.946-.598-1.644-.598-.556 0-1.036.085-1.442.256-.405.17-.744.412-1.014.725s-.474.679-.61 1.099c-.135.42-.202.878-.202 1.375v6.23h-1.816v-11.03h1.71zm17.547 3.242a3.12 3.12 0 0 0-.662-.992 3.116 3.116 0 0 0-2.232-.907c-.47 0-.894.083-1.271.246a2.93 2.93 0 0 0-.972.672 3.2 3.2 0 0 0-.641.992 3.766 3.766 0 0 0-.278 1.205h6.344a3.701 3.701 0 0 0-.288-1.216zm.437 7.083c-.826.625-1.865.938-3.118.938-.883 0-1.648-.143-2.296-.426a4.524 4.524 0 0 1-1.634-1.195 5.07 5.07 0 0 1-.993-1.835 8.835 8.835 0 0 1-.374-2.325c0-.839.128-1.607.384-2.304a5.5 5.5 0 0 1 1.079-1.813 4.903 4.903 0 0 1 1.645-1.195 5.035 5.035 0 0 1 2.082-.426c.983 0 1.798.202 2.446.608.648.405 1.167.92 1.559 1.547.392.625.662 1.308.812 2.047.15.74.21 1.444.181 2.112h-8.266c-.014.484.043.943.171 1.376.128.434.335.818.62 1.152.284.334.647.6 1.09.8.44.199.96.299 1.558.299.769 0 1.399-.178 1.89-.534.491-.355.815-.896.972-1.621h1.795c-.243 1.237-.777 2.17-1.603 2.795zm10.253-8.405c-.456-.384-1.068-.576-1.837-.576-.655 0-1.204.12-1.645.362a2.935 2.935 0 0 0-1.057.96 4.047 4.047 0 0 0-.566 1.376 7.497 7.497 0 0 0-.17 1.61c0 .513.06 1.01.18 1.494.122.484.31.914.567 1.29.256.377.59.68 1.004.907.413.228.904.342 1.473.342.897 0 1.599-.235 2.104-.704.506-.47.815-1.131.93-1.984h1.858c-.2 1.365-.709 2.418-1.527 3.157-.82.74-1.933 1.11-3.343 1.11-.84 0-1.584-.136-2.232-.406a4.317 4.317 0 0 1-1.624-1.153 4.984 4.984 0 0 1-.982-1.78 7.43 7.43 0 0 1-.331-2.272c0-.825.107-1.596.32-2.315a5.356 5.356 0 0 1 .972-1.877 4.568 4.568 0 0 1 1.634-1.259c.655-.305 1.417-.458 2.285-.458a6.68 6.68 0 0 1 1.763.224c.548.149 1.032.38 1.452.693.42.313.766.707 1.036 1.184s.442 1.042.513 1.696h-1.88c-.142-.696-.441-1.238-.897-1.621zm9.59-1.92v1.6h-2.2v6.847c0 .214.018.384.053.512a.528.528 0 0 0 .203.299c.1.071.238.117.417.139.178.02.409.032.694.032h.833v1.6h-1.388c-.47 0-.872-.032-1.207-.097-.335-.063-.606-.18-.812-.352-.206-.17-.36-.412-.46-.725-.1-.312-.149-.725-.149-1.237v-7.018h-1.88v-1.6h1.88v-3.306h1.816v3.306h2.2zm9.387 3.242a3.12 3.12 0 0 0-.662-.992 3.113 3.113 0 0 0-2.232-.907c-.47 0-.894.083-1.27.246a2.926 2.926 0 0 0-.973.672 3.2 3.2 0 0 0-.64.992c-.158.377-.25.779-.279 1.205h6.344a3.722 3.722 0 0 0-.288-1.216zm.438 7.083c-.826.625-1.866.938-3.119.938-.882 0-1.648-.143-2.296-.426a4.52 4.52 0 0 1-1.633-1.195 5.07 5.07 0 0 1-.994-1.835 8.853 8.853 0 0 1-.374-2.325c0-.839.129-1.607.385-2.304a5.499 5.499 0 0 1 1.078-1.813 4.904 4.904 0 0 1 1.645-1.195 5.033 5.033 0 0 1 2.083-.426c.982 0 1.797.202 2.445.608.648.405 1.168.92 1.56 1.547.391.625.662 1.308.811 2.047.15.74.21 1.444.182 2.112h-8.267c-.014.484.043.943.171 1.376.129.434.335.818.62 1.152.285.334.648.6 1.09.8.44.199.96.299 1.558.299.77 0 1.4-.178 1.89-.534.492-.355.815-.896.973-1.621h1.794c-.242 1.237-.777 2.17-1.602 2.795zm5.18-3.211c.134.49.34.928.618 1.312.278.384.634.69 1.069.917.434.228.943.342 1.527.342.612 0 1.132-.121 1.56-.363a3.13 3.13 0 0 0 1.046-.95c.27-.39.466-.835.587-1.333a6.41 6.41 0 0 0-.01-3.082 3.87 3.87 0 0 0-.61-1.333 3.1 3.1 0 0 0-1.078-.928c-.441-.235-.976-.352-1.602-.352-.613 0-1.132.12-1.56.362a2.89 2.89 0 0 0-1.025.96 4.172 4.172 0 0 0-.555 1.366 7.216 7.216 0 0 0-.171 1.578c0 .512.068 1.014.203 1.504zm6.524 3.914v-1.493h-.042a2.668 2.668 0 0 1-1.41 1.323c-.64.27-1.345.405-2.115.405-.854 0-1.598-.157-2.232-.47a4.573 4.573 0 0 1-1.58-1.258 5.472 5.472 0 0 1-.95-1.835 7.526 7.526 0 0 1-.321-2.218c0-.782.103-1.522.31-2.218.206-.697.52-1.305.94-1.824.42-.519.946-.931 1.58-1.238.633-.305 1.37-.458 2.21-.458.286 0 .591.028.92.085.327.057.654.153.982.288.327.135.637.313.929.534.292.22.537.494.737.82h.042v-5.674h1.816v15.231h-1.816zm18.957-7.114a4.076 4.076 0 0 0-.62-1.312 3.037 3.037 0 0 0-1.068-.917c-.434-.227-.943-.341-1.527-.341-.612 0-1.132.12-1.559.362a3.14 3.14 0 0 0-1.047.95c-.27.39-.466.835-.587 1.333a6.39 6.39 0 0 0-.182 1.514c0 .541.064 1.064.193 1.568.128.505.33.95.609 1.334.277.383.637.693 1.078.927.441.235.975.353 1.602.353.626 0 1.15-.121 1.57-.363.42-.242.758-.562 1.015-.96.256-.398.441-.854.555-1.365.114-.512.17-1.038.17-1.58 0-.511-.067-1.012-.202-1.503zm-6.526-8.117v5.696h.043a2.72 2.72 0 0 1 1.41-1.333 5.27 5.27 0 0 1 2.114-.416c.855 0 1.599.157 2.232.469a4.54 4.54 0 0 1 1.581 1.27c.42.533.737 1.148.95 1.844.215.697.322 1.437.322 2.22 0 .782-.104 1.52-.311 2.218a5.228 5.228 0 0 1-.94 1.824 4.44 4.44 0 0 1-1.58 1.226c-.633.299-1.37.448-2.21.448a5.459 5.459 0 0 1-1.902-.363 3.832 3.832 0 0 1-.929-.523 2.902 2.902 0 0 1-.737-.82h-.043v1.471h-1.815v-15.23h1.815zm15.122 16.704c-.213.54-.424.995-.63 1.365-.207.369-.434.672-.683.906a2.316 2.316 0 0 1-.833.512c-.307.107-.659.16-1.057.16a4.89 4.89 0 0 1-.641-.043 3.01 3.01 0 0 1-.62-.149v-1.663c.157.07.338.13.545.18.206.05.38.075.523.075.37 0 .68-.089.93-.267.248-.177.437-.43.565-.757l.748-1.856-4.379-10.964h2.051l3.226 9.023h.042l3.097-9.023h1.922l-4.806 12.5zm101.965-12.55H312.5v3.124h5.74v3.245h-5.74v3.703h6.9v3.39h-11.6V174.94h11.6v3.25zm20.464 10.164v3.298h-12.004V174.94h4.756v13.414h7.248zm38.297-7.044c3.697.833 5.343 2.322 5.343 4.964 0 1.25-.382 2.565-1.556 3.652-1.688 1.583-3.98 2.073-7.124 2.073-2.264 0-4.46-.507-6.62-1.425l1.097-3.341c1.882.785 3.721 1.421 5.703 1.421 2.138 0 3.27-.539 3.227-1.797-.047-1.363-2.379-1.77-4.679-2.244-2.385-.495-4.982-1.688-4.853-4.873.123-3.496 3.09-5.288 7.518-5.288 2.253 0 4.594.413 6.414 1.408l-1.293 3.076c-1.78-.914-3.522-1.258-5.004-1.258-.92 0-2.505.366-2.505 1.553 0 1.275 1.122 1.355 4.332 2.079zm-77.105-3.072h-4.937v13.414h-4.727v-13.414h-4.931v-3.298h14.595v3.298zm55.03-3.298h4.902v11.147c0 1.524-.024 1.884-.344 2.64-.64 1.557-2.847 3.226-7.126 3.226h-.173c-3.197 0-5.518-.778-6.71-2.27-.718-.91-.932-1.631-.932-3.224v-11.52h4.93v10.895c0 .892.096 1.45.296 1.763.396.605 1.244.945 2.404.965 1.567-.02 2.552-.607 2.7-1.62.053-.321.053-.552.053-1.384V174.94zm29.479 1.482h.308c.26 0 .498-.014.498-.312 0-.25-.217-.29-.416-.29h-.39v.602zm-.295-.84H386c.452 0 .663.177.663.54 0 .343-.217.486-.498.516l.542.835h-.317l-.515-.813h-.312v.813h-.295v-1.89zm.633 2.329c.75 0 1.33-.597 1.33-1.39 0-.774-.58-1.372-1.33-1.372-.759 0-1.34.598-1.34 1.372 0 .793.581 1.39 1.34 1.39zm0-3a1.61 1.61 0 0 1 1.624 1.61c0 .93-.74 1.627-1.624 1.627a1.62 1.62 0 0 1-1.634-1.627c0-.913.745-1.61 1.634-1.61zM384.511.693h.686l1.074 2.695 1.042-2.695H388v3.324h-.428V1.081h-.016l-1.18 2.936h-.242l-1.18-2.936h-.015v2.936h-.429V.693zm-2.1.363h-1.084V.693h2.594v.363h-1.083v2.961h-.428v-2.96z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="content-02">
        <div className="container-fluid">
          <div className="row mt-3" style={{ minHeight: "100vh" }}>
            <div
              className="col-lg-6 col-md-12"
              style={{
                backgroundColor: "#028996",
                backgroundSize: "cover",
                minHeight: "100vh",
              }}
            >
              <img
                src="https://fit52.com/static/fit52-hero-branding-137e247b315da9be665666e32e788aa3.png"
                width="200"
              />
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12 py-5 m-auto text-left py-5 my-5">
              <h2 className="display-4 mb-1">fit52</h2>
              <h5 className="mb-3 pb-0">Client: Carrie Underwood</h5>
              <p className="mb-5 lead text-secondary">
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
                  src="data:image/png;base64,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"
                  class="css-0"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-light" id="testimonials-01">
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
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-lg-10 col-md-12 col-sm-12 mx-auto">
              <h2 className="display-4 mb-4">Hit me up!</h2>
              <p className="lead text-secondary mb-5 pb-2 mx-5">
                Available for freelance and pro-bono work!
              </p>
              <a className="btn btn-warning btn-lg mr-2" href="#">
                Connect now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-1" id="footer-01">
        <div className="container">
          <div className="row align-items-center">
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
          </div>
          <div className="row">
            <div className="col">
              <hr className="mb-4" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 text-secondary text-center text-lg-left">
              <p className="pb-2">&copy; 2020 Robin Binder</p>
            </div>
            <div className="col-lg-6 col-md-12 text-secondary text-center text-lg-right">
              <ul className="list-inline pb-2">
                <li className="list-inline-item">
                  <a className="py-2 text-secondary" href="#">
                    mail@robinbinder.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
