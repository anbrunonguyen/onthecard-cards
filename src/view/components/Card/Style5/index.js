import React from "react";
import * as classes from "./style.module.css";
function Style5() {
  return (
    <div data-aos="fade-down" className={classes.Style5}>
      <h4>Thông tin cá nhânc</h4>
      <ul>
        <li>
          <img
            src="https://aboutme.vn/wp-content/uploads/2021/01/birthday.svg"
            alt=""
            width="35"
          ></img>
          <span>Ngày sinh: 30/10/1995</span>
        </li>
        <li>
          <img
            src="https://aboutme.vn/wp-content/uploads/2021/01/location.svg"
            alt=""
            width="35"
          ></img>
          <span>Nơi ở: 31 Phủ Liễn</span>
        </li>
      </ul>
    </div>
  );
}

export default Style5;
