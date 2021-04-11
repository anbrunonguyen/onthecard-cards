import React from "react";
import * as classes from "./style.module.css";

function Style({ data }) {
  return data ? (
    <>
      <div data-aos="fade-down" className={classes.Inteoduce}>
        <h4>{data.introduce.title}</h4>
        {data.introduce.contents.map((content) => (
          <p>{content.info}</p>
        ))}
      </div>

      <div data-aos="fade-down" className={classes.Information}>
        <h4>{data.job.title}</h4>
        <ul>
          {data.job.contents.map((item) => {
            return (
              <li>
                <img src={item.icon} alt="" width="35"></img>
                <span>{item.info}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div data-aos="fade-down" className={classes.Information}>
        <h4>{data.contact.title}</h4>
        <ul>
          {data.contact.contents.map((item) => {
            return (
              <li>
                <img src={item.icon} alt="" width="35"></img>
                <span>{item.info}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div data-aos="fade-down" className={classes.Information}>
        <h4>{data.payment.title}</h4>
        <ul>
          {data.payment.contents.map((item) => {
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

      <div data-aos="flip-up" className={classes.Information}>
        <h4>{data.infor.title}</h4>
        <ul>
          {data.infor.contents.map((item) => {
            return (
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
