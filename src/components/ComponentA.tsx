import { useState } from "react";
import React from "react";
import HocComponent from "./HocComponent";

const ComponentA = (props: any) => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h3>{props.values} </h3>
      <button onClick={props.setFunc}>{"increment"}</button>
    </div>
  );
};

export default HocComponent(ComponentA);
