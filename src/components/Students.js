import React, { useState, useEffect } from "react";
import { getStudents, deleteStudent } from "../services/api";
import StudentForm from "./StudentForm";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const result = await getStudents();
    setStudents(result.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

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
      <StudentForm fetchStudents={fetchStudents} />
    </div>
  );
};

export default Students;
