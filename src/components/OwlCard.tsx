import { margin } from "@mui/system";
import React from "react";

import "./owlcarousel.css";

type OwlCardStyle = {
  style: React.CSSProperties;
  cardNo: number;
  imgSrc: string;
};

const OwlCard = (props: OwlCardStyle) => {
  return (
    <div className="slider-width">
      <div className="item" style={props.style}>
        <h4>{props.cardNo}</h4>
        <img src={props.imgSrc} style={{ width: "260px", height: "190px" }} />
      </div>
    </div>
  );
};

export default OwlCard;
