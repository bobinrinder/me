import React from "react"

const Technologies = () => {
  return (
    <div className="py-5 bg-light" id="technologies-01">
      <div className="container py-4 mt-5">
        <div className="row mb-3 text-center">
          <div className="col">
            <h2 className="display-4 mb-2">Technologies</h2>
            <p className="lead text-secondary mb-5 pb-2">
              Although the technologies mentioned here are my current favorites,
              I believe it's important to stay open minded to the next big thing
              that's probably already waiting around the corner
            </p>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-lg-12 mx-auto text-center">
            <div className="card-group mb-4">
              <div className="card pt-5 mb-3 border-white">
                <div className="card-body text-center">
                  <h4 className="mb-3">Web</h4>
                  <p className="mb-2 text-secondary mx-3">
                    Making my first steps programming with vanilla JavaScript,
                    then spending a long time with jQuery but in 2016 I finally,
                    after a quick Angular detour, reached my destination for
                    now: React.
                    <br />
                    <br />
                    My experimental candidate: Svelte
                  </p>
                </div>
                {/* <div className="card-footer bg-transparent border-0 text-center py-4">
                  <a className="btn-link h4 text-secondary p-2" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div> */}
              </div>
              <div className="card pt-5 mb-3 border-white mx-1">
                <div className="card-body text-center">
                  <h4 className="mb-3">Native</h4>
                  <p className="mb-2 text-secondary mx-3">
                    After years with React I could not have been more excited to
                    finally do a big project with React Native. So far I have
                    been focused on the iOS side but in 2020 Android is up.
                    <br />
                    <br />
                    My experimental candidate: Flutter
                  </p>
                </div>
                {/* <div className="card-footer bg-transparent border-0 text-center py-4">
                  <a className="btn-link h4 text-secondary p-2" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div> */}
              </div>
              <div className="card pt-5 mb-3 border-white">
                <div className="card-body text-center">
                  <h4 className="mb-3">Backend</h4>
                  <p className="mb-2 text-secondary mx-3">
                    The Laravel framework is incredibly rich and can speed up
                    development like nothing else I have worked with.
                    <br />
                    Serverless NodeJS is a wonderful lightweight alternative
                    though and with a huge community behind it the ecosystem
                    keeps catching up.
                    <br />
                    <br />
                    My experimental candidate: Phoenix
                  </p>
                </div>
                {/* <div className="card-footer bg-transparent border-0 text-center py-4">
                  <a className="btn-link h4 text-secondary p-2" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-lg-12 mx-auto text-center">
            <div className="card-group mb-4">
              <div className="card pt-5 mb-3 border-white">
                <div className="card-body text-center">
                  <h4 className="mb-3">CI/CD</h4>
                  <p className="mb-2 text-secondary lead mx-3">Lorem Ipsum</p>
                </div>
                {/* <div className="card-footer bg-transparent border-0 text-center py-4">
                  <a className="btn-link h4 text-secondary p-2" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div> */}
              </div>
              <div className="card pt-5 mb-3 border-white">
                <div className="card-body text-center">
                  <h4 className="mb-3">DevOps</h4>
                  <p className="mb-2 text-secondary lead mx-3">Lorem Ipsum</p>
                </div>
                {/* <div className="card-footer bg-transparent border-0 text-center py-4">
                  <a className="btn-link h4 text-secondary p-2" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div> */}
              </div>
              <div className="card pt-5 mb-3 border-white">
                <div className="card-body text-center">
                  <h4 className="mb-3">Analytics</h4>
                  <p className="mb-2 text-secondary lead mx-3">Lorem Ipsum</p>
                </div>
                {/* <div className="card-footer bg-transparent border-0 text-center py-4">
                  <a className="btn-link h4 text-secondary p-2" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
