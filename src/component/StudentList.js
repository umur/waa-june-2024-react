// src/StudentList.js
import React from "react";
import Student from "./Student";

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          email={student.email}
          major={student.major}
          gpa={student.gpa}
          coursesTaken={student.coursesTaken}
        />
      ))}
    </div>
  );
};

export default StudentList;
