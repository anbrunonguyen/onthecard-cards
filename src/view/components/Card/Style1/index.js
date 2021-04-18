import React from 'react';
import { AOSAnimation } from '../../../../core/constant';
import * as classes from './style.module.css';

function Style({ data }) {
  return data ? (
    <>
      <div data-aos={AOSAnimation.fadeDown} className={classes.Information}>
        <h4>{data.title}</h4>
        <ul>
          {data.contents.map((item, i) => {
            return item.icon === null ? (
              <p key={i}>{item.info}</p>
            ) : (
              <li key={i}>
                <img src={item.icon} width='35' alt={item.info}></img>
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
