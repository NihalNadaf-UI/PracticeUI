import React, { Children, useRef } from "react";
import "./owlcarousel.css";
import { useEffect } from "react";

type OwlCardProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
};

const Caraousel = (props: OwlCardProps) => {
  let boxDetail = useRef(null);
  const next = () => {
    let box: any = boxDetail.current;

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  const prev = () => {
    let box: any = boxDetail.current;

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width, box.scrollLeft - width);
  };

  return (
    <div
      className="box"
      style={{ border: "thick solid #004D40", marginTop: "80px" }}
    >
      <div>
        <button className="btn-prev" type="button" onClick={prev}>
          &lt;
        </button>
        <button className="btn-next" type="button" onClick={next}>
          &gt;
        </button>
      </div>
      <div
        className="slider-container"
        ref={boxDetail}
        item-disp-d="4"
        style={props.style}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Caraousel;
