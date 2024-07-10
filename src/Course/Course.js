import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  getAllCoursesApi,
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
  const [error, setError] = useState(null);

  const inputCode = useRef(null);

  useEffect(() => {
    if (showAdd) {
      inputCode.current.focus();
    }
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

  const saveCourse = async () => {
    try {
      const data = await saveCourseApi(courseForm);
      setCoursesList(data);
      resetForm();
    } catch (error) {
      setError("Error saving course");
      console.error("Error saving course:", error);
    }
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (courseForm.id === 0) {
      await saveCourse();
    } else {
      await updateCourse();
    }
    setShowAdd(false);
  };

  const resetForm = () => {
    setCourseForm(initialForm);
    setError(null);
  };

  const toggle = () => {
    if (showAdd) {
      resetForm();
      inputCode.current.focus();
    }
    setShowAdd((prev) => !prev);
  };

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
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
              {courseForm.id > 0 ? (
                <button type="submit" className="btn btn-success">
                  Update
                </button>
              ) : (
                <button type="submit" className="btn btn-success">
                  Submit
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
