import React from "react";

type ButtonsProps = {
  name: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; // in this case we added event as MouseEvent also we can be specific for which html element are we using
};

export const ButtonEventFunc = (props: ButtonsProps) => {
  return (
    //child to parent data flow
    <button onClick={(event) => props.handleClick(event, 1)}>
      {/* parent to child data flow*/}
      {props.name}
    </button>
  );
};
