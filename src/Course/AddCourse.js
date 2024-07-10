import React, { useRef, useState } from "react";
import { saveCourseApi, updateCourseApi } from "../Service/apiService";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const initialForm = {
    id: 0,
    name: "",
    code: "",
  };
  const [courseForm, setCourseForm] = useState(initialForm);
  const [error, setError] = useState(null);

  const inputCode = useRef(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseForm((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const saveCourse = async () => {
    try {
      const data = await saveCourseApi(courseForm);
    } catch (error) {
      setError("Error saving course");
      console.error("Error saving course:", error);
    }
    navigate("/course");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await saveCourse();
  };

  return (
    <div className="container mt-5">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={courseForm.name}
            onChange={handleChange}
            placeholder="Enter Course"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="code"
            value={courseForm.code}
            onChange={handleChange}
            placeholder="Enter Code"
            ref={inputCode}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success m-3">
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() => {
              navigate("/course");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddCourse;
