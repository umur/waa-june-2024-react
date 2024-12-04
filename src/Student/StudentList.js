import React from "react";
import { deleteStudentApi } from "../Service/apiService";

const StudentList = ({
  studentList,
  setStudentForm,
  setShowAdd,
  setStudentList,
}) => {
  const editHandler = (id) => {
    if (id) {
      const result = studentList.find((stu) => stu.id === id);
      if (result) {
        setStudentForm({
          id: result.id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          gpa: result.gpa,
          major: result.major,
        });
        setShowAdd(true);
      }
    }
  };

  const deleteHandler = async (id) => {
    try {
      const data = await deleteStudentApi(id);
      setStudentList(data);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container">
      <h2>Student List</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Email</th>
            <th scope="col">GPA</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((data, index) => (
            <tr key={data.id}>
              <td scope="row">{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.gpa}</td>
              <td
                className="btn btn-sm btn-success m-1"
                onClick={() => editHandler(data.id)}
              >
                Edit
              </td>
              <td
                className="btn btn-sm btn-danger m-1"
                onClick={() => deleteHandler(data.id)}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
