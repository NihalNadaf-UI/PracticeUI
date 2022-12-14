import { margin } from "@mui/system";
import React from "react";

import "./owlcarousel.css";

type CardStyle = {
  style: React.CSSProperties;
  children?: React.ReactNode;
  cardNo?: number;
};

const Card = (props: CardStyle) => {
  return (
    <div>
      <div style={props.style}>
        <h4>{props.cardNo}</h4>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
