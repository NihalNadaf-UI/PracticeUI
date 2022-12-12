import React from "react";

type NameProp = {
  student: {
    id: number;
    first: string;
    last: string;
  }[];
};

function NameList(props: NameProp) {
  return (
    <div>
      <h3>Below are the list of students</h3>
      {props.student.map((stud) => (
        <h5>
          Key ={stud.id} Name ={stud.first} Lastname={stud.last}
        </h5>
      ))}
    </div>
  );
}

export default NameList;
