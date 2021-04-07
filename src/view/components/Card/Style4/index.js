import React from "react";
import * as classes from "./style.module.css";
function Style4() {
  return (
    <div data-aos="fade-down" className={classes.Style4}>
      <h4>Thanh toán</h4>
      <ul>
        <li>
          <img
            src="https://aboutme.vn/wp-content/uploads/2021/01/bank-account.svg"
            alt=""
            width="35"
          ></img>
          <span>Tài khoản ngân hàng</span>
        </li>
        <p>Thông tin tài khoản ngân hàng</p>
        <li>
          <img
            src="https://aboutme.vn/wp-content/uploads/2021/01/momo.svg"
            alt=""
            width="35"
          ></img>
          <span>Ví điện tử momo</span>
        </li>
        <li>
          <img
            src="https://aboutme.vn/wp-content/uploads/2021/01/viettel-pay-1.svg"
            alt=""
            width="35"
          ></img>
          <span>Viettel Pay</span>
        </li>
        <li>
          <img
            src="https://aboutme.vn/wp-content/uploads/2021/01/zalo-pay.svg"
            alt=""
            width="35"
          ></img>
          <span>Zalo Pay</span>
        </li>
      </ul>
    </div>
  );
}

export default Style4;
