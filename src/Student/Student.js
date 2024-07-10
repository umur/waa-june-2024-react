import React, { useEffect, useState } from "react";
import {
  getAllCoursesApi,
  getAllStudentsAPi,
  saveStudentApi,
} from "../Service/apiService";
import StudentList from "./StudentList";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  major: "",
  gpa: "",
  course: "",
};

const Student = () => {
  const [studentForm, setStudentForm] = useState(initialForm);
  const [courseList, setCourseList] = useState([]);
  const [students, setStudents] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    getAllCourses();
    getAllStudents();
  }, []);

  const getAllCourses = async () => {
    try {
      const response = await getAllCoursesApi();
      setCourseList(response);
    } catch (error) {}
  };

  const getAllStudents = async () => {
    try {
      const response = await getAllStudentsAPi();
      setStudents(response);
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentForm((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await saveStudentApi(studentForm);
      setStudents(data);
      resetForm();
    } catch (error) {
      console.log("Error=" + error);
    }
    setShowAdd(false);
  };

  const resetForm = () => {
    setStudentForm(initialForm);
  };

  const toggle = () => {
    setShowAdd((pre) => !pre);
  };

  return (
    <div className="container">
      <button type="button" className="btn btn-success m-2" onClick={toggle}>
        Add Student
      </button>
      {showAdd && (
        <div>
          <h2>Student Details</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              {/* <label htmlFor="firstName" className="form-label">First Name</label> */}
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={studentForm.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                required
              />
            </div>

            <div className="mb-3">
              {/* <label htmlFor="lastName" className="form-label">Last Name</label> */}
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={studentForm.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
            </div>

            <div className="mb-3">
              {/* <label htmlFor="email" className="form-label">Email</label> */}
              <input
                type="text"
                className="form-control"
                name="email"
                value={studentForm.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="mb-3">
              {/* <label htmlFor="major" className="form-label">Major</label> */}
              <input
                type="text"
                className="form-control"
                name="major"
                value={studentForm.major}
                onChange={handleChange}
                placeholder="Enter Major"
                required
              />
            </div>

            <div className="mb-3">
              {/* <label htmlFor="gpa" className="form-label">GPA</label> */}
              <input
                type="text"
                className="form-control"
                name="gpa"
                value={studentForm.gpa}
                onChange={handleChange}
                placeholder="Enter GPA (A-F)"
                required
              />
            </div>

            <div className="mb-3">
              <select
                className="form-control"
                name="course"
                onChange={handleChange}
              >
                <option value="">Select one Course</option>
                {courseList.map((course) => (
                  <option value={course.id} key={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              {studentForm.id > 0 ? (
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

      <StudentList
        studentList={students}
        setStudentForm={setStudentForm}
        setShowAdd={setShowAdd}
        setStudentList={setStudents}
      />
    </div>
  );
};
export default Student;
