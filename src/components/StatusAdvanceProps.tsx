import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data Fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }

  return (
    <div>
      <h1>Staus :- {message}</h1>
    </div>
  );
};

export default Status;
