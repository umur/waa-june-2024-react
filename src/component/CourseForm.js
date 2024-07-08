// src/CourseForm.js
import React, { useState } from "react";

const CourseForm = ({ addCourse }) => {
  const [course, setCourse] = useState({ name: "", code: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course.name && course.code) {
      addCourse(course);
      setCourse({ name: "", code: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={course.name}
        onChange={handleChange}
        placeholder="Course Name"
      />
      <input
        type="text"
        name="code"
        value={course.code}
        onChange={handleChange}
        placeholder="Course Code"
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;
