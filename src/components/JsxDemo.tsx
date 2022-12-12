import React from "react";

type DemoProps = {
  name: string;
};

const Hello = (props: DemoProps) => {
  console.log(props);
  return (
    <div>
      <h1>Hi there {props.name}</h1>
    </div>
  );
};

export default Hello;
