import React, { Children } from "react";
import "./owlcarousel.css";
import { useEffect } from "react";
import OwlCard from "./OwlCard";

type OwlCardProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
};

const OwlCaraousels = (props: OwlCardProps) => {
  let itemDisplay: any;
  let items: any;
  let margin: number = 20;
  let stylebox: any;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    stylebox = document.querySelector(".slider-container");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDisplay = document
      .getElementsByClassName("slider-container")[0]
      .getAttribute("item-disp-d");
    console.log("This is" + itemDisplay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    items = document.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
      items[i].style.width = stylebox.clientWidth / itemDisplay - margin + "px";
    }
  });
  const next = () => {
    let box: any = document.querySelector(".slider-container");

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  const prev = () => {
    let box: any = document.querySelector(".slider-container");

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
      <div className="slider-container" item-disp-d="4" style={props.style}>
        {props.children}
      </div>
    </div>
  );
};
export default OwlCaraousels;
