import React from "react";
import * as classes from "./style.module.css";

function Style({ data }) {
  return data ? (
    <>
      <div data-aos="fade-down" className={classes.Information}>
        <h4>{data.title}</h4>
        <ul>
          {data.contents.map((item) => {
            return item.icon === null ? (
              <p>{item.info}</p>
            ) : (
              <li>
                <img src={item.icon} alt="" width="35"></img>
                <span>{item.info}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  ) : null;
}

export default Style;
