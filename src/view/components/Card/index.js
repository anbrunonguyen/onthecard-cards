import React from "react";
import { CardStye } from "../../../core/constant";
import Style from "./Style";
import Style2 from "./Style2";

function Card({ style, data }) {
  let renderItem;
  switch (style) {
    case CardStye.S1:
      renderItem = <Style data={data} />;
      break;
    case CardStye.S2:
      renderItem = <Style2 data={data} />;
      break;
    case CardStye.S3:
      renderItem = <Style data={data} />;
      break;
    case CardStye.S4:
      renderItem = <Style data={data} />;
      break;
    case CardStye.S5:
      renderItem = <Style />;
      break;
    default:
      renderItem = <Style />;
  }
  return renderItem;
}

export default Card;
