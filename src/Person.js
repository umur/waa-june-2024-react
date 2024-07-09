import React from "react";

export default function Person(props) {
  return (
    <div>
      Firstname: {props.fname}
      Lastname: {props.lname}
    </div>
  );
}
