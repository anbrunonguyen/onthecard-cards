import React from "react";
import { CardStye } from "../../../core/constant";
import Style from "./Style";
import Style2 from "./Style2";
import Style3 from "./Style3";
import Style4 from "./Style4";

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
      renderItem = <Style3 data={data} />;
      break;
    case CardStye.S4:
      renderItem = <Style4 data={data} />;
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
