import React from "react";

type PersonListsPropsObj = {
  namesObj: {
    first: string;
    last: string;
  }[];
};

export const PersonListFunc = (props: PersonListsPropsObj) => {
  return (
    <div>
      {props.namesObj.map((name) => {
        return (
          <h3>
            {name.first} {name.last}
          </h3>
        );
      })}
    </div>
  );
};
