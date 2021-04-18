import React from "react";
// import * as classes from "./style.module.css";
import "./style.css";

function Style({ data }) {
  return data ? (
    <>
      <div>
        <div className="main-content">
          <div className="container mt-7">
            {/* Table */}
            <div className="row">
              <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile shadow">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                        <a href="/">
                          <img
                            src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            className="rounded-circle"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <a href="/" className="btn btn-sm btn-info mr-4">
                        Connect
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-default float-right"
                      >
                        Message
                      </a>
                    </div>
                  </div>
                  <div className="card-body pt-0 pt-md-4">
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <a className="description" href="tel:123-456-7890">
                              <span className="heading">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  id="Layer_1"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <linearGradient
                                    id="SVGID_1_"
                                    gradientUnits="userSpaceOnUse"
                                    x1="4.9"
                                    y1="257.9"
                                    x2="507.3"
                                    y2="257.9"
                                    gradientTransform="matrix(1 0 0 -1 0 514)"
                                  >
                                    <stop
                                      offset={0}
                                      style={{ stopColor: "#167C04" }}
                                    />
                                    <stop
                                      offset={1}
                                      style={{ stopColor: "#008F2D" }}
                                    />
                                  </linearGradient>
                                  <circle
                                    style={{ fill: "url(#SVGID_1_)" }}
                                    cx="256.1"
                                    cy="256.1"
                                    r="251.2"
                                  />
                                  <path
                                    id="web"
                                    style={{ display: "none", fill: "#FFFFFF" }}
                                    d="M366.9,145.1c-61.3-61.3-160.5-61.3-221.7,0c-61.3,61.3-61.3,160.5,0,221.7  c61.3,61.3,160.5,61.3,221.7,0C428.1,305.6,428.2,206.4,366.9,145.1z M360.3,344.5c-7.3-6.6-15.2-12.3-23.4-17.3  c5.5-18.9,8.7-39.6,9.5-61.2h46.1C390.4,295.1,379.2,322.3,360.3,344.5L360.3,344.5z M119.5,266h46.1c0.8,21.6,4,42.3,9.5,61.2  c-8.3,5-16.1,10.8-23.4,17.3C132.8,322.3,121.6,295.1,119.5,266z M151.7,167.5c7.3,6.6,15.2,12.3,23.4,17.3  c-5.5,18.9-8.7,39.6-9.5,61.2h-46.1C121.6,216.9,132.8,189.7,151.7,167.5z M246,186.9c-16.3-1.2-32-5.2-46.6-11.8  c8.5-21.8,24.1-48,46.6-54.5V186.9z M246,206.9V246h-60.4c0.7-18.2,3.3-35.8,7.6-51.8C209.8,201.4,227.6,205.8,246,206.9z M246,266  v39.1c-18.4,1.1-36.2,5.5-52.8,12.7c-4.3-16-6.9-33.6-7.6-51.8L246,266L246,266z M246,325.1v66.3c-22.5-6.5-38.1-32.6-46.6-54.5  C214,330.3,229.7,326.3,246,325.1z M266,325.1c16.3,1.2,32,5.2,46.6,11.8c-8.5,21.8-24.1,48-46.6,54.5V325.1z M266,305.1V266h60.4  c-0.7,18.2-3.3,35.8-7.6,51.8C302.2,310.6,284.4,306.2,266,305.1L266,305.1z M266,246v-39.1c18.4-1.1,36.2-5.5,52.8-12.7  c4.3,16,6.9,33.6,7.6,51.8H266z M266,186.9v-66.3c22.5,6.5,38.1,32.6,46.6,54.5C298,181.7,282.3,185.7,266,186.9z M310.9,130.6  c12.8,5.6,24.7,13.2,35.4,22.6c-5.1,4.5-10.5,8.6-16.1,12.2C325.2,153.1,318.9,141.1,310.9,130.6z M181.8,165.4  c-5.6-3.6-11-7.7-16.1-12.2c10.7-9.4,22.6-17,35.4-22.6C193.1,141.1,186.8,153.1,181.8,165.4L181.8,165.4z M181.8,346.6  c5,12.3,11.3,24.3,19.3,34.8c-12.8-5.6-24.7-13.2-35.4-22.6C170.8,354.3,176.2,350.2,181.8,346.6z M330.2,346.6  c5.6,3.6,11,7.7,16.1,12.2c-10.7,9.4-22.6,17-35.4,22.6C318.9,370.9,325.2,358.9,330.2,346.6L330.2,346.6z M346.4,246  c-0.8-21.6-4-42.3-9.5-61.2c8.3-5,16.1-10.8,23.4-17.3c18.9,22.2,30,49.4,32.1,78.5H346.4z"
                                  />
                                  <path
                                    id="mail"
                                    style={{ display: "none", fill: "#FFFFFF" }}
                                    d="M412.8,354.4c0.2-0.5,0.3-1.1,0.3-1.7V159.2c0-0.6-0.1-1.2-0.3-1.7  c0-0.1,0-0.1-0.1-0.2c-0.2-0.6-0.6-1.2-1-1.7c0,0,0-0.1-0.1-0.1c0,0,0,0-0.1,0c-0.5-0.5-1-0.9-1.6-1.2l-0.1-0.1  c-0.6-0.3-1.2-0.4-1.9-0.4c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0H104.4c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0c-0.7,0-1.3,0.2-1.9,0.5  c0,0-0.1,0-0.1,0.1c-0.6,0.3-1.2,0.7-1.6,1.2c0,0,0,0-0.1,0c0,0,0,0.1-0.1,0.1c-0.4,0.5-0.8,1.1-1,1.7c0,0.1,0,0.1-0.1,0.2  c-0.2,0.5-0.3,1.1-0.3,1.7v193.6c0,0.6,0.1,1.2,0.3,1.7c0,0.1,0,0.1,0.1,0.2c0.2,0.6,0.6,1.2,1,1.7c0,0,0,0.1,0.1,0.1  c0,0,0.1,0,0.1,0.1c0.2,0.2,0.4,0.3,0.6,0.5c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.2,0.5,0.3,0.8,0.4c0.1,0,0.1,0.1,0.2,0.1  c0.7,0.3,1.4,0.4,2.1,0.4h303.1c0.8,0,1.5-0.2,2.1-0.4c0.1,0,0.2-0.1,0.3-0.2c0.2-0.1,0.5-0.2,0.7-0.4c0.1-0.1,0.2-0.2,0.3-0.3  c0.2-0.1,0.4-0.3,0.5-0.5l0.1-0.1c0,0,0-0.1,0.1-0.1c0.4-0.5,0.8-1,1-1.7C412.7,354.6,412.7,354.5,412.8,354.4z M109.9,171.6l92,84  l-92,84.7C109.9,340.3,109.9,171.6,109.9,171.6z M298.4,251.5c-0.4,0.2-0.8,0.5-1.1,0.8c-0.1,0.1-0.2,0.3-0.3,0.4l-41,37.6  L118.5,164.7h275L298.4,251.5z M210,263l42.3,38.7c1,1,2.4,1.4,3.7,1.4c1.3,0,2.6-0.5,3.7-1.4l41.8-38.2l92,83.8h-275L210,263z   M309.6,256.1l92.5-84.5v168.8L309.6,256.1z"
                                  />
                                  <path
                                    id="phone"
                                    style={{ fill: "#FAFAFA" }}
                                    d="M364.2,299.3c-22.2,0.1-44.1-4.9-64-14.7c-6.5-3.2-14.3-0.5-17.5,6c0,0,0,0,0,0.1  l-9.4,19.5c-28.3-16.2-51.7-39.7-68-68l19.5-9.4c6.5-3.1,9.2-11,6.1-17.5c0,0,0,0,0-0.1c-9.7-19.9-14.8-41.8-14.7-64  c0-7.2-5.9-13.1-13.1-13.1h-48.3c-7.2,0-13.1,5.9-13.1,13.1c0,122.7,99.8,222.5,222.5,222.5c7.2,0,13.1-5.9,13.1-13.1v-48.3  C377.3,305.1,371.4,299.3,364.2,299.3z"
                                  />
                                  <g id="zalo" style={{ display: "none" }}>
                                    <path
                                      style={{
                                        display: "inline",
                                        fill: "#F9FAFC",
                                      }}
                                      d="M127.3,286.5c16.1,0,31.2,0,46.3,0c11.6,0,16.7,4,16.9,12.7   c0.2,9.1-5.2,13.8-17,13.9c-21.9,0-43.8,0-65.7,0c-8.3,0-16.4-0.4-20.6-9.4s1.2-15.4,6.2-21.7c15.5-19.9,31.1-39.7,46.7-59.6   c2.2-2.7,5.4-5.1,5.5-10.4h-28c-5.4,0-10.8,0-16.1-0.3C94,211,88.2,207.2,88,199.3c-0.2-8.5,6-12.1,13.8-13.1c1.3-0.1,2.7-0.1,4,0   c20.9,0,41.8-0.3,62.6,0c18.7,0.3,24.8,11.1,13.9,26.3c-15.6,21.6-32.3,42.1-48.6,63.2C130.7,278.6,128.5,282.4,127.3,286.5z"
                                    />
                                    <path
                                      style={{
                                        display: "inline",
                                        fill: "#F9FAFC",
                                      }}
                                      d="M287.5,266.1c0,10.4,0,20.9,0,31.3c0,6.6-1.7,12.1-7.8,15.3   c-5.4,3.3-12.4,2.4-16.8-2.1c-3.5-3.3-6.3-2.6-9.7,0c-20.1,14.6-47.9,0.4-56.8-15.1c-15.7-27.6-7-62.4,19.8-75.9   c12.8-6.4,25.3-6.6,37.3,1.5c3.9,2.7,6.4,3.4,10.2-0.5c4.3-4.2,10.8-5,16-1.9c5.3,2.6,8.4,8.1,7.9,14   C287.3,243.9,287.5,255.1,287.5,266.1z M258,265.2c0-13.9-8-23.1-19.8-22.9c-11.8,0.2-19.9,9.8-19.8,24.3   c0,13.1,8.1,22.2,19.4,22.4c12.1,0.2,20.2-9.5,20-23.8H258z"
                                    />
                                    <path
                                      style={{
                                        display: "inline",
                                        fill: "#F9FAFC",
                                      }}
                                      d="M437.2,265.4c0,30.2-21.1,51.7-50.3,51.6c-26.7,0-48.3-21.6-48.3-48.3   c0-0.3,0-0.6,0-0.9c0-30.9,19.3-52,48.1-52.1C416.7,215.5,437.2,235.6,437.2,265.4z M407.5,265.4c-0.2-14-8.2-23.2-20.1-23   c-11.9,0.3-19.4,9.5-19.3,23.7s8.3,23.2,20.1,23S407.7,279.3,407.5,265.4L407.5,265.4z"
                                    />
                                    <path
                                      style={{
                                        display: "inline",
                                        fill: "#F9FAFC",
                                      }}
                                      d="M299.7,244.4c0-17.2,0-34.4,0-51.6c0-10.7,5.5-16.9,14.4-17s14.3,5.8,14.3,16.9   c0.1,35,0.1,70.1,0,105.2c0,10-6.5,16.9-14.9,16.8s-13.8-6.6-13.9-16.7C299.6,280.1,299.7,262.3,299.7,244.4z"
                                    />
                                  </g>
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div>
                            <a href="https://zalo.me/0989825568">
                              <span className="heading">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  id="Layer_1"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    style={{ fill: "#0068FF" }}
                                    cx="256.1"
                                    cy="256.1"
                                    r="251.2"
                                  />
                                  <path
                                    id="web"
                                    style={{ display: "none", fill: "#FFFFFF" }}
                                    d="M366.9,145.1c-61.3-61.3-160.5-61.3-221.7,0c-61.3,61.3-61.3,160.5,0,221.7  c61.3,61.3,160.5,61.3,221.7,0C428.1,305.6,428.2,206.4,366.9,145.1z M360.3,344.5c-7.3-6.6-15.2-12.3-23.4-17.3  c5.5-18.9,8.7-39.6,9.5-61.2h46.1C390.4,295.1,379.2,322.3,360.3,344.5L360.3,344.5z M119.5,266h46.1c0.8,21.6,4,42.3,9.5,61.2  c-8.3,5-16.1,10.8-23.4,17.3C132.8,322.3,121.6,295.1,119.5,266z M151.7,167.5c7.3,6.6,15.2,12.3,23.4,17.3  c-5.5,18.9-8.7,39.6-9.5,61.2h-46.1C121.6,216.9,132.8,189.7,151.7,167.5z M246,186.9c-16.3-1.2-32-5.2-46.6-11.8  c8.5-21.8,24.1-48,46.6-54.5V186.9z M246,206.9V246h-60.4c0.7-18.2,3.3-35.8,7.6-51.8C209.8,201.4,227.6,205.8,246,206.9z M246,266  v39.1c-18.4,1.1-36.2,5.5-52.8,12.7c-4.3-16-6.9-33.6-7.6-51.8L246,266L246,266z M246,325.1v66.3c-22.5-6.5-38.1-32.6-46.6-54.5  C214,330.3,229.7,326.3,246,325.1z M266,325.1c16.3,1.2,32,5.2,46.6,11.8c-8.5,21.8-24.1,48-46.6,54.5V325.1z M266,305.1V266h60.4  c-0.7,18.2-3.3,35.8-7.6,51.8C302.2,310.6,284.4,306.2,266,305.1L266,305.1z M266,246v-39.1c18.4-1.1,36.2-5.5,52.8-12.7  c4.3,16,6.9,33.6,7.6,51.8H266z M266,186.9v-66.3c22.5,6.5,38.1,32.6,46.6,54.5C298,181.7,282.3,185.7,266,186.9z M310.9,130.6  c12.8,5.6,24.7,13.2,35.4,22.6c-5.1,4.5-10.5,8.6-16.1,12.2C325.2,153.1,318.9,141.1,310.9,130.6z M181.8,165.4  c-5.6-3.6-11-7.7-16.1-12.2c10.7-9.4,22.6-17,35.4-22.6C193.1,141.1,186.8,153.1,181.8,165.4L181.8,165.4z M181.8,346.6  c5,12.3,11.3,24.3,19.3,34.8c-12.8-5.6-24.7-13.2-35.4-22.6C170.8,354.3,176.2,350.2,181.8,346.6z M330.2,346.6  c5.6,3.6,11,7.7,16.1,12.2c-10.7,9.4-22.6,17-35.4,22.6C318.9,370.9,325.2,358.9,330.2,346.6L330.2,346.6z M346.4,246  c-0.8-21.6-4-42.3-9.5-61.2c8.3-5,16.1-10.8,23.4-17.3c18.9,22.2,30,49.4,32.1,78.5H346.4z"
                                  />
                                  <path
                                    id="mail"
                                    style={{ display: "none", fill: "#FFFFFF" }}
                                    d="M412.8,354.4c0.2-0.5,0.3-1.1,0.3-1.7V159.2c0-0.6-0.1-1.2-0.3-1.7  c0-0.1,0-0.1-0.1-0.2c-0.2-0.6-0.6-1.2-1-1.7c0,0,0-0.1-0.1-0.1c0,0,0,0-0.1,0c-0.5-0.5-1-0.9-1.6-1.2l-0.1-0.1  c-0.6-0.3-1.2-0.4-1.9-0.4c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0H104.4c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0c-0.7,0-1.3,0.2-1.9,0.5  c0,0-0.1,0-0.1,0.1c-0.6,0.3-1.2,0.7-1.6,1.2c0,0,0,0-0.1,0c0,0,0,0.1-0.1,0.1c-0.4,0.5-0.8,1.1-1,1.7c0,0.1,0,0.1-0.1,0.2  c-0.2,0.5-0.3,1.1-0.3,1.7v193.6c0,0.6,0.1,1.2,0.3,1.7c0,0.1,0,0.1,0.1,0.2c0.2,0.6,0.6,1.2,1,1.7c0,0,0,0.1,0.1,0.1  c0,0,0.1,0,0.1,0.1c0.2,0.2,0.4,0.3,0.6,0.5c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.2,0.5,0.3,0.8,0.4c0.1,0,0.1,0.1,0.2,0.1  c0.7,0.3,1.4,0.4,2.1,0.4h303.1c0.8,0,1.5-0.2,2.1-0.4c0.1,0,0.2-0.1,0.3-0.2c0.2-0.1,0.5-0.2,0.7-0.4c0.1-0.1,0.2-0.2,0.3-0.3  c0.2-0.1,0.4-0.3,0.5-0.5l0.1-0.1c0,0,0-0.1,0.1-0.1c0.4-0.5,0.8-1,1-1.7C412.7,354.6,412.7,354.5,412.8,354.4z M109.9,171.6l92,84  l-92,84.7C109.9,340.3,109.9,171.6,109.9,171.6z M298.4,251.5c-0.4,0.2-0.8,0.5-1.1,0.8c-0.1,0.1-0.2,0.3-0.3,0.4l-41,37.6  L118.5,164.7h275L298.4,251.5z M210,263l42.3,38.7c1,1,2.4,1.4,3.7,1.4c1.3,0,2.6-0.5,3.7-1.4l41.8-38.2l92,83.8h-275L210,263z   M309.6,256.1l92.5-84.5v168.8L309.6,256.1z"
                                  />
                                  <path
                                    id="phone"
                                    style={{ display: "none", fill: "#FAFAFA" }}
                                    d="M364.2,299.3c-22.2,0.1-44.1-4.9-64-14.7c-6.5-3.2-14.3-0.5-17.5,6  c0,0,0,0,0,0.1l-9.4,19.5c-28.3-16.2-51.7-39.7-68-68l19.5-9.4c6.5-3.1,9.2-11,6.1-17.5c0,0,0,0,0-0.1c-9.7-19.9-14.8-41.8-14.7-64  c0-7.2-5.9-13.1-13.1-13.1h-48.3c-7.2,0-13.1,5.9-13.1,13.1c0,122.7,99.8,222.5,222.5,222.5c7.2,0,13.1-5.9,13.1-13.1v-48.3  C377.3,305.1,371.4,299.3,364.2,299.3z"
                                  />
                                  <g id="zalo">
                                    <path
                                      style={{ fill: "#F9FAFC" }}
                                      d="M127.3,286.5c16.1,0,31.2,0,46.3,0c11.6,0,16.7,4,16.9,12.7c0.2,9.1-5.2,13.8-17,13.9   c-21.9,0-43.8,0-65.7,0c-8.3,0-16.4-0.4-20.6-9.4s1.2-15.4,6.2-21.7c15.5-19.9,31.1-39.7,46.7-59.6c2.2-2.7,5.4-5.1,5.5-10.4h-28   c-5.4,0-10.8,0-16.1-0.3C94,211,88.2,207.2,88,199.3c-0.2-8.5,6-12.1,13.8-13.1c1.3-0.1,2.7-0.1,4,0c20.9,0,41.8-0.3,62.6,0   c18.7,0.3,24.8,11.1,13.9,26.3c-15.6,21.6-32.3,42.1-48.6,63.2C130.7,278.6,128.5,282.4,127.3,286.5z"
                                    />
                                    <path
                                      style={{ fill: "#F9FAFC" }}
                                      d="M287.5,266.1c0,10.4,0,20.9,0,31.3c0,6.6-1.7,12.1-7.8,15.3c-5.4,3.3-12.4,2.4-16.8-2.1   c-3.5-3.3-6.3-2.6-9.7,0c-20.1,14.6-47.9,0.4-56.8-15.1c-15.7-27.6-7-62.4,19.8-75.9c12.8-6.4,25.3-6.6,37.3,1.5   c3.9,2.7,6.4,3.4,10.2-0.5c4.3-4.2,10.8-5,16-1.9c5.3,2.6,8.4,8.1,7.9,14C287.3,243.9,287.5,255.1,287.5,266.1z M258,265.2   c0-13.9-8-23.1-19.8-22.9c-11.8,0.2-19.9,9.8-19.8,24.3c0,13.1,8.1,22.2,19.4,22.4c12.1,0.2,20.2-9.5,20-23.8H258z"
                                    />
                                    <path
                                      style={{ fill: "#F9FAFC" }}
                                      d="M437.2,265.4c0,30.2-21.1,51.7-50.3,51.6c-26.7,0-48.3-21.6-48.3-48.3c0-0.3,0-0.6,0-0.9   c0-30.9,19.3-52,48.1-52.1C416.7,215.5,437.2,235.6,437.2,265.4z M407.5,265.4c-0.2-14-8.2-23.2-20.1-23   c-11.9,0.3-19.4,9.5-19.3,23.7s8.3,23.2,20.1,23S407.7,279.3,407.5,265.4L407.5,265.4z"
                                    />
                                    <path
                                      style={{ fill: "#F9FAFC" }}
                                      d="M299.7,244.4c0-17.2,0-34.4,0-51.6c0-10.7,5.5-16.9,14.4-17s14.3,5.8,14.3,16.9   c0.1,35,0.1,70.1,0,105.2c0,10-6.5,16.9-14.9,16.8s-13.8-6.6-13.9-16.7C299.6,280.1,299.7,262.3,299.7,244.4z"
                                    />
                                  </g>
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div>
                            <a href="https://www.messenger.com/t/1695919125/">
                              <span className="heading">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  viewBox="0 0 800 800"
                                >
                                  <radialGradient
                                    id="Gradient"
                                    cx="101.925"
                                    cy="809.0079"
                                    r="1.0896"
                                    gradientTransform="matrix(800 0 0 -799.9985 -81386 648000.75)"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop
                                      offset={0}
                                      style={{ stopColor: "#0099FF" }}
                                    />
                                    <stop
                                      offset="0.6098"
                                      style={{ stopColor: "#A033FF" }}
                                    />
                                    <stop
                                      offset="0.9348"
                                      style={{ stopColor: "#FF5280" }}
                                    />
                                    <stop
                                      offset={1}
                                      style={{ stopColor: "#FF7061" }}
                                    />
                                  </radialGradient>
                                  <path
                                    fill="url(#Gradient)"
                                    d="M400,0C174.7,0,0,165.1,0,388c0,116.6,47.8,217.4,125.6,287c6.5,5.8,10.5,14,10.7,22.8l2.2,71.2  c0.7,22.7,24.1,37.5,44.9,28.3l79.4-35c6.7-3,14.3-3.5,21.4-1.6c36.5,10,75.3,15.4,115.8,15.4c225.3,0,400-165.1,400-388  S625.3,0,400,0z"
                                  />
                                  <path
                                    fill="#FFFFFF"
                                    d="M159.8,501.5l117.5-186.4c18.7-29.7,58.7-37,86.8-16l93.5,70.1c8.6,6.4,20.4,6.4,28.9-0.1    l126.2-95.8c16.8-12.8,38.8,7.4,27.6,25.3L522.7,484.9c-18.7,29.7-58.7,37-86.8,16l-93.5-70.1c-8.6-6.4-20.4-6.4-28.9,0.1    l-126.2,95.8C170.5,539.5,148.5,519.4,159.8,501.5z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div>
                            <a href="https://aboutme.vn/wp-content/uploads/namecard-vcf/phùng-minh-Đức-anh.vcf">
                              <span className="heading">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  id="bold"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <circle
                                    style={{ fill: "#39439B" }}
                                    cx={256}
                                    cy={256}
                                    r="250.5"
                                  />
                                  <path
                                    style={{ fill: "#FFFFFF" }}
                                    d="M256,295c-2.6,0-5-1-6.8-2.9l-65.6-68.8c-5.7-5.9-1.5-15.9,6.8-15.9h34.4v-71.9  c0-8.6,7-15.6,15.6-15.6h31.2c8.6,0,15.6,7,15.6,15.6v71.9h34.4c8.2,0,12.5,9.9,6.8,15.9l-65.6,68.8C261,294,258.6,295,256,295z"
                                  />
                                  <path
                                    style={{ fill: "#FFFFFF" }}
                                    d="M384.1,370H127.9c-12.1,0-21.9-9.8-21.9-21.9v-6.2c0-12.1,9.8-21.9,21.9-21.9h256.3  c12.1,0,21.9,9.8,21.9,21.9v6.2C406,360.2,396.2,370,384.1,370z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3>
                        Phùng Minh Đức Anh
                        <span className="font-weight-light">, 27</span>
                      </h3>
                      <div className="text-center-again">
                        <div className="h5 font-weight-300">
                          <img
                            src="https://aboutme.vn/wp-content/uploads/2021/01/birthday.svg"
                            alt=""
                            width="25"
                          ></img>
                          Ngày sinh: 30/10/1995
                        </div>
                        <div className="h5 font-weight-300">
                          <img
                            src="https://aboutme.vn/wp-content/uploads/2021/01/location.svg"
                            alt=""
                            width="25"
                          ></img>
                          Nơi ở: 31 Phủ Liễn
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* cai th u2  */}
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <h6>Địa chỉ làm việc</h6>
                <h2>135 Đội cấn</h2>
                <a href="https://www.google.com/maps/search/135+%C4%90%E1%BB%99i+c%E1%BA%A5n/@15.6536637,101.9636445,6z/data=!3m1!4b1">
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/location-1.svg"
                    alt=""
                    width="35"
                  ></img>
                </a>
              </div>
              <div className="course-info">
                <div className="progress-container">
                  <div className="progress" />
                  <div className="progress_center">
                    <img
                      src="https://aboutme.vn/wp-content/uploads/2021/01/work-phone.svg"
                      alt=""
                      width="20"
                    ></img>
                    <span className="progress-text">024 2222 23456</span>
                  </div>
                </div>
                <h6>Nghề nghiệp</h6>
                <h4>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/suitcase-1-1.svg"
                    alt=""
                    width="35"
                  ></img>
                  CEO &amp; Founder
                </h4>
                <h4>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/web-1.svg"
                    alt=""
                    width="35"
                  ></img>
                  HereStores.vn
                </h4>
                <h4>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/web-1.svg"
                    alt=""
                    width="35"
                  ></img>
                  Aboutme.vn
                </h4>
                <h4>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/suitcase-1-1.svg"
                    alt=""
                    width="35"
                  ></img>
                  Công ty TNHH PMC
                </h4>
                <p className="btn">ducanh3010@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* phan 2 */}
        <section class="contentInfo">
          <h1>Thông tin liên lạc</h1>
          <div class="cardsInfo">
            <div class="cardInfo">
              <div class="card__side card__side--front card__side--front-1">
                <div class="card__description">
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/zalo-1.svg"
                    alt=""
                    width="50"
                  ></img>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/fb.svg"
                    alt=""
                    width="50"
                  ></img>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/linkedin.svg"
                    alt=""
                    width="50"
                  ></img>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__description">
                  <p>Zalo: 0989825568</p>
                  <p>Facebook: mr.heo3010</p>
                  <p>Linkedin</p>
                </div>
              </div>
            </div>

            <div class="cardInfo">
              <div class="card__side card__side--front card__side--front-1">
                <div class="card__description">
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/phone-3.svg"
                    alt=""
                    width="50"
                  ></img>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/insta-1.svg"
                    alt=""
                    width="50"
                  ></img>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__description">
                  <p>0989 825 568</p>
                  <p>Instagram: ducanh3010</p>
                  <p>0889 682 289</p>
                </div>
              </div>
            </div>

            <div class="cardInfo">
              <div class="card__side card__side--front card__side--front-1">
                <div class="card__description">
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/whatsapp.svg"
                    alt=""
                    width="50"
                  ></img>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/viber-1.svg"
                    alt=""
                    width="50"
                  ></img>
                  <img
                    src="https://aboutme.vn/wp-content/uploads/2021/01/wechat.svg"
                    alt=""
                    width="50"
                  ></img>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__description">
                  <p>Whatsapp: 0989 825 568</p>
                  <p>Viber: 0889682289</p>
                  <p>Wechat</p>
                </div>
              </div>
            </div>
          </div>

          <section className="pay">
            <h1>Thông tin tài khoản ngân hàng</h1>
            <div className="container_pay">
              <div className="row flip-boxes">
                <div className="col-md-3 col-sm-4 col-8 flip-box">
                  <div
                    className="front_pay"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350)",
                    }}
                  >
                    <div className="content text-center">
                      Ví điện tử momo
                      <br />
                      <span className="click-for-more"></span>
                    </div>
                  </div>
                  <div className="back_pay">
                    <div className="content_pay">
                      <img
                        src="https://aboutme.vn/wp-content/uploads/2021/01/momo.svg"
                        alt=""
                        width="50"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row flip-boxes">
                <div className="col-md-3 col-sm-4 col-8 flip-box">
                  <div
                    className="front_pay"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350)",
                    }}
                  >
                    <div className="content text-center">
                      Viettel Pay
                      <br />
                      <span className="click-for-more"></span>
                    </div>
                  </div>
                  <div className="back_pay">
                    <div className="content_pay">
                      <img
                        src="https://aboutme.vn/wp-content/uploads/2021/01/viettel-pay-1.svg"
                        alt=""
                        width="50"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row flip-boxes">
                <div className="col-md-3 col-sm-4 col-8 flip-box">
                  <div
                    className="front_pay"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350)",
                    }}
                  >
                    <div className="content text-center">
                      Zalo Pay
                      <br />
                      <span className="click-for-more"></span>
                    </div>
                  </div>
                  <div className="back_pay">
                    <div className="content_pay">
                      <img
                        src="https://aboutme.vn/wp-content/uploads/2021/01/zalo-pay.svg"
                        alt=""
                        width="50"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  ) : null;
}

export default Style;
