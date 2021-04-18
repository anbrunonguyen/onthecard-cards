import React from "react";
// import * as classes from "./style.module.css";
import "./style.css";

function Style4({ data }) {
  return data ? (
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
  ) : null;
}

export default Style4;
