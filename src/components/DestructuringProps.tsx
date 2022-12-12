import React from "react";

type DestructuringProps = {
  name: string;
};

const DestructuringPropsFunc = (props: DestructuringProps) => {
  return <div>Hello {props.name}</div>;
};

export default DestructuringPropsFunc;
