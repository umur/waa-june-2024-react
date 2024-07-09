import React from "react";

function StudentElement ({student}) {
  return (
    <div>
      <div>Id: {student.id}</div>
      <div>Name: {student.firstName} {student.firstName}</div>
      <div>Email: {student.mail}</div>
      <div>Major: {student.major}</div>
      <div>GPA: {student.gpa}</div>
    </div>
  );
}
export default StudentElement;