import React from "react";

function CourseElement ({course}) {
  return (
    <div>
      <div>Id: {course.id}</div>
      <div>Name: {course.name}</div>
      <div>Code: {course.code}</div>
    </div>
  )
}

export default CourseElement;