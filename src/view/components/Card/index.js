import React from 'react';
import { CardStye } from '../../../core/constant';
import Style1 from './Style1';

function Card({ style }) {
  let renderItem;
  switch (style) {
    case CardStye.S1:
      renderItem = <Style1 />;
      break;
    default:
      renderItem = <Style1 />;
  }
  return renderItem;
}

export default Card;
