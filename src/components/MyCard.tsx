import React from "react";
import "./mycard.css";
type CardProps = {
  cardno: string;
  imageSrc: string;
};
const MyCard = (props: CardProps) => {
  return (
    <div className="mycard">
      MyCard....{props.cardno}
      <img src={props.imageSrc} />
    </div>
  );
};

export default MyCard;
