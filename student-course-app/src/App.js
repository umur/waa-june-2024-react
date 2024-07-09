import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import CourseList from './components/course/CourseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseForm from './components/course/CourseForm';
import StudentList from './components/student/StudentList';
import StudentForm from './components/student/StudentForm';

function App() {

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [courses, setCourses] = useState([
    { id: 1, name: 'Course 1', code: 'C001' },
    { id: 2, name: 'Course 2', code: 'C002' },
]);
const [students, setStudents] = useState([
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', major: 'CS', gpa: 3.5, coursesTaken: [] },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', major: 'IT', gpa: 3.8, coursesTaken: [] },
]);
const handleSaveCourse = (course) => {
  if (course.id) {
      setCourses(courses.map(c => (c.id === course.id ? course : c)));
  } else {
      course.id = courses.length + 1;
      setCourses([...courses, course]);
  }
  setSelectedCourse(null);
};
const handleDeleteCourse = (id) => {
  setCourses(courses.filter(c => c.id !== id));
  setSelectedCourse(null);
};
const handleSaveStudent = (student) => {
  if (student.id) {
      setStudents(students.map(s => (s.id === student.id ? student : s)));
  } else {
      student.id = students.length + 1;
      setStudents([...students, student]);
  }
  setSelectedStudent(null);
};

const handleDeleteStudent = (id) => {
  setStudents(students.filter(s => s.id !== id));
  setSelectedStudent(null);
};
  return (
    <div className="container mt-5">
    <h1 className="mb-4">Course and Student Management</h1>
    <div className="row">
        <div className="col-md-6">
            <CourseList courses={courses} setSelectedCourse={setSelectedCourse} onDelete={handleDeleteCourse} />
            <CourseForm selectedCourse={selectedCourse} onSave={handleSaveCourse} />
        </div>
        <div className="col-md-6">
            <StudentList students={students} setSelectedStudent={setSelectedStudent} onDelete={handleDeleteStudent} />
            <StudentForm selectedStudent={selectedStudent} onSave={handleSaveStudent} />
        </div>
    </div>
</div>
  );
}

export default App;
