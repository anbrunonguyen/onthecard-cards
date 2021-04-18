import React from "react";
// import * as classes from "./style.module.css";
// import "./style.css";

function Style({ data }) {
  return data ? (
    <div>
      <nav
        className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
        color-on-scroll={100}
        id="sectionsNav"
      >
        <div className="container">
          <div className="navbar-translate">
            <a
              className="navbar-brand"
              href="https://www.creative-tim.com/product/material-kit/?partner=101249"
              target="_blank"
            >
              Material Kit{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="dropdown nav-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">apps</i> Components
                </a>
                <div className="dropdown-menu dropdown-with-icons">
                  <a href="../index.html" className="dropdown-item">
                    <i className="material-icons">layers</i> All Components
                  </a>
                  <a
                    href="https://demos.creative-tim.com/material-kit/docs/2.0/getting-sntarted/introduction.html"
                    className="dropdown-item"
                  >
                    <i className="material-icons">content_paste</i>{" "}
                    Documentation
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/creativetimofficial/material-kit/archive/master.zip"
                >
                  <i className="material-icons">cloud_download</i> Download
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  rel="tooltip"
                  title
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  target="_blank"
                  data-original-title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  rel="tooltip"
                  title
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  target="_blank"
                  data-original-title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  rel="tooltip"
                  title
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  target="_blank"
                  data-original-title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="page-header header-filter"
        filter-color="purple"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1502716197620-bf14ce1651b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d57ce6c1e3fd4734fe33f56a89e5192&auto=format&fit=crop&w=2500&q=80 2500w")',
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
              <div className="card card-signup">
                <h2 className="card-title text-center">Register</h2>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="info info-horizontal">
                        <div className="icon icon-rose">
                          <i className="material-icons">timeline</i>
                        </div>
                        <div className="description">
                          <h4 className="info-title">Marketing</h4>
                          <p className="description">
                            We've created the marketing campaign of the website.
                            It was a very interesting collaboration.
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-primary">
                          <i className="material-icons">code</i>
                        </div>
                        <div className="description">
                          <h4 className="info-title">Fully Coded in HTML5</h4>
                          <p className="description">
                            We've developed the website with HTML5 and CSS3. The
                            client has access to the code using GitHub.
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-info">
                          <i className="material-icons">group</i>
                        </div>
                        <div className="description">
                          <h4 className="info-title">Built Audience</h4>
                          <p className="description">
                            There is also a Fully Customizable CMS Admin
                            Dashboard for this product.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mr-auto">
                      <div className="social text-center">
                        <button className="btn btn-just-icon btn-round btn-twitter">
                          <i className="fa fa-twitter" />
                        </button>
                        <button className="btn btn-just-icon btn-round btn-dribbble">
                          <i className="fa fa-dribbble" />
                        </button>
                        <button className="btn btn-just-icon btn-round btn-facebook">
                          <i className="fa fa-facebook"> </i>
                        </button>
                        <h4> or be classical </h4>
                      </div>
                      <form className="form" method action>
                        <div className="form-group bmd-form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">face</i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name..."
                            />
                          </div>
                        </div>
                        <div className="form-group bmd-form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">mail</i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email..."
                            />
                          </div>
                        </div>
                        <div className="form-group bmd-form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">lock_outline</i>
                              </span>
                            </div>
                            <input
                              type="password"
                              placeholder="Password..."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              defaultChecked
                            />
                            <span className="form-check-sign">
                              <span className="check" />
                            </span>
                            I agree to the{" "}
                            <a href="#something">terms and conditions</a>.
                          </label>
                        </div>
                        <div className="text-center">
                          <a
                            href="#pablo"
                            className="btn btn-primary btn-round"
                          >
                            Get Started
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center ">
          <p>
            Made with{" "}
            <a
              href="https://www.creative-tim.com/product/material-kit/?partner=101249"
              target="_blank"
            >
              Material Kit
            </a>{" "}
            by Creative Tim
          </p>
        </footer>
      </div>
    </div>
  ) : null;
}

export default Style;
