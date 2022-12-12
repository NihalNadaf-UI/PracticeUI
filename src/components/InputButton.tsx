import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputEventFunc = (props: InputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};
