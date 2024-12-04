import React, { useEffect, useState } from "react";
import CourseElement from "./CourseElement";
import axios from "axios";

function Course () {

  const [courses, setCoursesState] = useState([]);
  const getCouses = async () => {
    const resp = await axios.get("http://localhost:3000/courses");
    if (resp.status === 200) {
      setCoursesState(resp.data);
    }
  }

  useEffect(() => {
    getCouses();
  }, []);
  
  return (
    courses.map((course) => { return <CourseElement key={course.id} course={course} /> })
  );
}

export default Course;