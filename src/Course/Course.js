import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  getAllCoursesApi,
  saveCourseApi,
  updateCourseApi,
} from "../Service/apiService";
import CourseList from "./CourseList";
import { useNavigate } from "react-router-dom";
import { initialCourseForm as initialForm } from "../types/types";
const Course = () => {
  const [courseForm, setCourseForm] = useState(initialForm);
  const [coursesList, setCoursesList] = useState([]);
  const [error, setError] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  const inputCode = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = useCallback(async () => {
    try {
      const data = await getAllCoursesApi();
      setCoursesList(data);
    } catch (error) {
      setError("Error fetching courses");
      console.error("Error fetching courses:", error);
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCourseForm((prevCourseForm) => ({
      ...prevCourseForm,
      [name]: value,
    }));
  };

  const updateCourse = async () => {
    try {
      const data = await updateCourseApi(courseForm);
      setCoursesList(data);
      resetForm();
    } catch (error) {
      setError("Error updating course");
      console.error("Error updating course:", error);
    }
  };

  const handleCourseUpdate = async (event) => {
    event.preventDefault();
    await updateCourse();
    setShowEdit(false);
  };

  const resetForm = () => {
    setCourseForm(initialForm);
    setError(null);
  };

  const toggle = () => {
    navigate("/add-course");
  };

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="button" className="btn btn-success m-2" onClick={toggle}>
        Add Course
      </button>

      {showEdit && (
        <div>
          <h2>Edit Course Details</h2>
          <form onSubmit={handleCourseUpdate}>
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
            <div className="m-3">
              <button type="submit" className="btn btn-success m-3">
                Update
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
      )}

      {!showEdit && (
        <CourseList
          coursesList={coursesList}
          setShowEdit={setShowEdit}
          setCourseForm={setCourseForm}
          setCoursesList={setCoursesList}
        />
      )}
    </div>
  );
};

export default Course;
