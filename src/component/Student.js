// src/Student.js
import React from "react";
import CourseIntStudent from "./CourseInStudent";

const Student = ({
  id,
  firstName,
  lastName,
  email,
  major,
  gpa,
  coursesTaken,
}) => {
  return (
    <div className="student">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Major: {major}</p>
      <p>GPA: {gpa}</p>
      <h3>Courses Taken</h3>
      <div className="course-list">
        {coursesTaken.map((course) => (
          <CourseIntStudent
            key={course.id}
            id={course.id}
            name={course.name}
            code={course.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Student;
