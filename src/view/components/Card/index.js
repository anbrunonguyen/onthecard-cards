import React from 'react';
import { CardStye } from '../../../core/constant';
import Style1 from './Style1';
import Style2 from './Style2';
import Special from './Special';

function Card({ style, data }) {
  let renderItem;
  switch (style) {
    case CardStye.S1:
      renderItem = <Style1 data={data} />;
      break;
    case CardStye.special:
      renderItem = <Special data={data} />;
      break;
    case CardStye.S2:
      renderItem = <Style2 data={data} />;
      break;
    // Add your style here
    default:
      renderItem = <Style1 />;
  }
  return renderItem;
}

export default Card;
