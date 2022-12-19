import React, { ComponentType } from "react";
import { useState } from "react";

const HocComponent = (OriginalComponent: React.FunctionComponent) => {
  const NewComponent = (props: any) => {
    const [counterValue, setCounter] = useState(props.newValue);
    const increment = () => {
      setCounter(counterValue + 1);
    };
    return (
      <OriginalComponent setFunc={increment} values={counterValue} {...props} />
    );
  };
  return NewComponent;
};

export default HocComponent;
