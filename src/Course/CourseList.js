import React from "react";
import { deleteCourseApi } from "../Service/apiService";

const CourseList = ({
  coursesList,
  setCourseForm,
  setShowEdit,
  setCoursesList,
}) => {
  const editHandler = (id) => {
    if (id) {
      setShowEdit(true);
      const result = coursesList.find((course) => course.id === id);
      if (result) {
        setCourseForm({ id: result.id, name: result.name, code: result.code });
      }
    }
  };

  const deleteHandler = async (id) => {
    try {
      const data = await deleteCourseApi(id);
      setCoursesList(data);
    } catch (error) {
      console.error("Error deleting courses:", error);
    }
  };

  return (
    <div className="container">
      <h2>Course List</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {coursesList.map((data, index) => (
            <tr key={data.id}>
              <td scope="row">{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.code}</td>
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

export default CourseList;
