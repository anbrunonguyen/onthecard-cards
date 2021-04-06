import React from "react";
import * as classes from "./style.module.css";

function CoverPhoto() {
  return (
    <div className={classes.CoverPhoto}>
      <div className={classes.GridContainer}>
        <div className={classes.Item1}>
          <div className={classes.BackGroundImg}>
            <a href="https://aboutme.vn/namecard/phung-minh-duc-anh/">
              <img
                alt=""
                src="https://aboutme.vn/wp-content/uploads/2021/01/cover-1024x576.jpg"
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverPhoto;
