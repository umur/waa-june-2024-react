import React from "react";
import StudentForm from "./StudentForm";

const Students = (props) => {
  const { courses, students, fetchStudents, handleDelete } = props;

  return (
    <div className="mb-2">
      <h2>Students</h2>
      <table className="customTable mb-2">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Major</th>
            <th>GPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.major}</td>
              <td>{student.gpa}</td>
              <td>
                <button
                  className="btnDelete"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <StudentForm courses={courses} fetchStudents={fetchStudents} />
    </div>
  );
};

export default Students;
