import React from "react";
import "./mycard.css";
import img1 from "/home/josh/my-demo/src/components/img1.jpg";
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
