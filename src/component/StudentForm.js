// src/StudentForm.js
import React, { useState } from "react";

const StudentForm = ({ addStudent, courses }) => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    major: "",
    gpa: "",
    coursesTaken: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setStudent({
        ...student,
        coursesTaken: [...student.coursesTaken, value],
      });
    } else {
      setStudent({
        ...student,
        coursesTaken: student.coursesTaken.filter((course) => course !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      student.firstName &&
      student.lastName &&
      student.email &&
      student.major &&
      student.gpa
    ) {
      addStudent({ ...student, id: Date.now() });
      setStudent({
        firstName: "",
        lastName: "",
        email: "",
        major: "",
        gpa: "",
        coursesTaken: [],
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={student.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={student.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="major"
        value={student.major}
        onChange={handleChange}
        placeholder="Major"
        required
      />
      <input
        type="number"
        name="gpa"
        value={student.gpa}
        onChange={handleChange}
        placeholder="GPA"
        step="0.01"
        min="0"
        max="4"
        required
      />
      <div>
        <h3>Courses Taken</h3>
        {courses
          ? courses.map((course) => (
              <label key={course.id}>
                <input
                  type="checkbox"
                  value={course.id}
                  checked={student.coursesTaken.includes(course.id)}
                  onChange={handleCheckboxChange}
                />
                {course.name}
              </label>
            ))
          : null}
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
