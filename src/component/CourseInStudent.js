// src/Course.js
import React from "react";

const CourseIntStudent = ({ id, name, code, deleteCourse }) => {
  return (
    <div className="course">
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Code: {code}</p>
    </div>
  );
};

export default CourseIntStudent;
