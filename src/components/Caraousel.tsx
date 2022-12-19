import React, { Children, useRef } from "react";
import { Button, Grid } from "@mui/material";
import "./owlcarousel.css";
import { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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
    <div className="box" style={{}}>
      <Grid
        style={{
          display: "flex",
          border: "thick solid #004D40",
          marginTop: "80px",
        }}
      >
        <Button
          className="btn-prev"
          type="button"
          onClick={prev}
          color="primary"
          disableElevation
          endIcon={<ArrowBackIosNewIcon style={{ fontSize: "50px" }} />}
        ></Button>

        <div
          className="slider-container"
          ref={boxDetail}
          item-disp-d="4"
          style={props.style}
        >
          {props.children}
        </div>
        <Button
          className="btn-next"
          type="button"
          onClick={next}
          color="primary"
          disableElevation
          endIcon={<ArrowForwardIosIcon style={{ fontSize: "50px" }} />}
        ></Button>
      </Grid>
    </div>
  );
};
export default Caraousel;
