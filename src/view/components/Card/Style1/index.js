import React from 'react';
import * as classes from './style.module.css';

function Style1({ data }) {
  const renderItem = data.contents.map((content) => (
    <li>
      <img src={content.icon} alt='' width='35'></img>
      <span>{content.info}</span>
    </li>
  ));
  return data ? (
    <div data-aos='fade-down' className={classes.Style1}>
      <h4>{data.title}</h4>
      <ul>{renderItem}</ul>
    </div>
  ) : null;
}

export default Style1;
