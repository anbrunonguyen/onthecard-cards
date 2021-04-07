import React from "react";
import { CardStye } from "../../../core/constant";
import Style1 from "./Style1";
import Style2 from "./Style2";
import Style3 from "./Style3";
import Style4 from "./Style4";
import Style5 from "./Style5";

function Card({ style }) {
  let renderItem;
  switch (style) {
    case CardStye.S1:
      renderItem = <Style1 />;
      break;
    case CardStye.S2:
      renderItem = <Style2 />;
      break;
    case CardStye.S3:
      renderItem = <Style3 />;
      break;
    case CardStye.S4:
      renderItem = <Style4 />;
      break;
    case CardStye.S5:
      renderItem = <Style5 />;
      break;
    default:
      renderItem = <Style2 />;
  }
  return renderItem;
}

export default Card;
