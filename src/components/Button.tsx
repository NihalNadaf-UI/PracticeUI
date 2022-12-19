import React from "react";

interface ButtonProps {
  handleClick: () => void;
}
export const ButtonClickFunc = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Click</button>;
};
