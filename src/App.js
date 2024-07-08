import "./App.css";
import StudentList from "./component/StudentList";
import { useState } from "react";
import { DEFAULT_COURSES, DEFAULT_STUDENTS } from "./constant";
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";
import StudentForm from "./component/StudentForm";
function App() {
  const [students, setStudents] = useState(DEFAULT_STUDENTS);
  const [courses, setCourses] = useState(DEFAULT_COURSES);
  const addCourse = (course) => {
    setCourses([...courses, { ...course, id: Date.now() }]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };
  const addStudent = (student) => {
    console.log(student);
    setStudents([...students, student]);
  };
  return (
    <div className="App">
      <h1>Courses</h1>
      <CourseForm addCourse={addCourse} />
      <CourseList courses={courses} deleteCourse={(id) => deleteCourse(id)} />

      <h1>Student</h1>
      <StudentForm courses={courses} addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
