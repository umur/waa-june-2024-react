import "./App.css";
import StudentList from "./component/StudentList";
import { useEffect, useState } from "react";
import { DEFAULT_COURSES, DEFAULT_STUDENTS } from "./constant";
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";
import StudentForm from "./component/StudentForm";
import { studentApi } from "./datasource/studentApi";
import { courseApi } from "./datasource/courseApi";
function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getStudents();
    getCourses();
  }, []);

  const addCourse = async (course) => {
    const newCourse = { ...course, id: Date.now() };
    const data = await courseApi.addCourse(newCourse);
    setCourses([...courses, data]);
  };

  const getStudents = async () => {
    const data = await studentApi.getStudents();
    setStudents(data);
  };

  const getCourses = async () => {
    const data = await courseApi.getCourses();
    setCourses(data);
  };
  const deleteCourse = async (courseId) => {
    await courseApi.deleteCourseById(courseId);
    await getCourses();
  };
  const addStudent = async (student) => {
    const data = await studentApi.addStudent(student);
    setStudents([...students, data]);
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
