import React, { useEffect, useState } from "react";
import Student from "./components/Student";
import Course from "./components/Course";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students: ", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  return (
      <div className="App">
        <div>
          <h2>Student and Course Information</h2>
          <div>
            <Student students={students} fetchStudents={fetchStudents} />
            <Course courses={courses} />
          </div>
        </div>
      </div>
  );
}

export default App;
