import React from 'react';
import { AOSAnimation } from '../../../../core/constant';
import * as classes from './style.module.css';

function Style({ data }) {
  return data ? (
    <>
      <div data-aos={AOSAnimation.zoomIn} className={classes.Style2}>
        <div className={classes.Title}>
          <h3>{data.title}</h3>
        </div>
        <div className={classes.Content}>
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
      </div>
    </>
  ) : null;
}

export default Style;
