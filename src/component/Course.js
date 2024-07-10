// src/Course.js
import React from "react";

const Course = ({ id, name, code, deleteCourse }) => {
  return (
    <div className="course">
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>
        Code: {code} <button onClick={() => deleteCourse(id)}>Delete</button>
      </p>
    </div>
  );
};

export default Course;
