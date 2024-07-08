// src/CourseList.js
import React from "react";
import Course from "./Course";

const CourseList = ({ courses, deleteCourse }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <Course
          key={course.id}
          id={course.id}
          name={course.name}
          code={course.code}
          deleteCourse={deleteCourse}
        />
      ))}
    </div>
  );
};

export default CourseList;
