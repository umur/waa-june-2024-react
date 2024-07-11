import axios from "axios";
import { useEffect, useState } from "react";
import Course from "./Course";

export default function Courses() {
  const courseList = [];
  const [courseState, setCourseState] = useState(courseList);

  const getAllCourses = async () => {
    const result = await axios.get("http://localhost:8080/courses");
    setCourseState(result.data);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div>
      {courseState.map((item) => {
        return (
          <Course
            id={item.id}
            name={item.name}
            code={item.code}
            students={item.students}
          />
        );
      })}
    </div>
  );
}
