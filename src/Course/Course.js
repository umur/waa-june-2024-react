import React, { useEffect, useState } from "react";
import {
  getCourseApi,
  saveCourseApi,
  updateCourseApi,
} from "../Service/apiService";
import CourseList from "./CourseList";

const Course = () => {
  const initialForm = {
    id: 0,
    name: "",
    code: "",
  };
  const [courseForm, setCourseForm] = useState(initialForm);
  const [coursesList, setCoursesList] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await getCourseApi();
      setCoursesList(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveCourse = async () => {
    try {
      const data = await saveCourseApi(courseForm);
      setCoursesList(data);
    } catch (error) {
      console.error("Error saving courses:", error);
    }
  };

  const updateCourse = async () => {
    try {
      const data = await updateCourseApi(courseForm);
      setCoursesList(data);
    } catch (error) {
      console.error("Error updating courses:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (courseForm.id == 0) {
      saveCourse();
    } else {
      updateCourse();
    }
    setShowAdd(false);
    resetForm();
  };

  const resetForm = () => {
    setCourseForm(initialForm);
  };

  const toggle = () => {
    setShowAdd((prev) => !prev);
  };

  return (
    <div className="container">
      <button type="button" className="btn btn-success m-2" onClick={toggle}>
        Add Course
      </button>

      {showAdd && (
        <div>
          <h2>Course Details</h2>
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
              {/* <label htmlFor="code" className="form-label">
                Course Code
              </label> */}
              <input
                type="text"
                className="form-control"
                name="code"
                value={courseForm.code}
                onChange={handleChange}
                placeholder="Enter Code"
                required
              />
            </div>
            <div className="mb-3">
              {courseForm.id > 0 ? (
                <button type="submit" className="btn btn-success">
                  Update
                </button>
              ) : (
                <button type="submit" className="btn btn-success">
                  Sumit
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      <CourseList
        coursesList={coursesList}
        setShowAdd={setShowAdd}
        setCourseForm={setCourseForm}
        setCoursesList={setCoursesList}
      />
    </div>
  );
};

export default Course;
