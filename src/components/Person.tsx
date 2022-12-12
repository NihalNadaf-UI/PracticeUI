import React from "react";

type PersonPropsObj = {
  name: {
    first: string;
    last: string;
  };
};

const SingleObjectFunc = (props: PersonPropsObj) => {
  return (
    <div>
      <h4>
        Hey {props.name.first} {props.name.last}
      </h4>
    </div>
  );
};

export default SingleObjectFunc;
