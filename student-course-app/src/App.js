import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import CourseList from './components/course/CourseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseForm from './components/course/CourseForm';
import StudentList from './components/student/StudentList';
import StudentForm from './components/student/StudentForm';
import axios from 'axios';

function App() {

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [nextId, setNextId] = useState(1); // Initialize the ID counter
  const [nextStudentId,setNextStudentId] = useState(1);
  const [courses, setCourses] = useState([
    { id: 11111, name: 'Course 1', code: 'C001' },
    { id: 2222222, name: 'Course 2', code: 'C002' },
]);
const [students, setStudents] = useState([
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', major: 'CS', gpa: 3.5, coursesTaken: [] },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', major: 'IT', gpa: 3.8, coursesTaken: [] },
]);

useEffect(()=>{
  const fetchCourses = async ()=>{
    try{
      const response = await axios.get('http://localhost:8080/api/courses');
     setCourses(response.data);
     if(response.data.length>0){
      setNextId(Math.max(...response.data.map(course => course.id)) + 1);
     }
     }
     catch(error){
     console.error('Error fetching courses:',error);
     }
     
     };
     fetchCourses();
  },[]);

  useEffect(()=>{

    const fetchStudents = async ()=>{
      try{
        const response = await axios.get('http://localhost:8080/api/students');
        setStudents(response.data);
        if(response.data.length>0){
          setNextStudentId(Math.max(...response.data.map(course => course.id)) + 1);
        }
  
      }
      catch(error){
        console.error('Error fetching Students:',error);
      }
    }
   fetchStudents();
  },[]);



const handleSaveCourse = async (course) => {

  try{
    if (course.id) {
      const response = await axios.put('http://localhost:8080/api/courses',course);
      const updatedCourse = response.data;
      setCourses(courses.map(c => (c.id === updatedCourse.id ? updatedCourse : c)));

  } else {

      course.id = nextId;
      const response = await axios.post('http://localhost:8080/api/courses',course);
      const newCourse = response.data;
      console.log(newCourse);
      setCourses([...courses,newCourse]);
      setNextId(nextId + 1); // Increment the ID counter

    
  }
  setSelectedCourse(null);
  }
  catch(error)
  {
    console.error('Error saving course:', error);
    // Handle error (e.g., display an error message to the user)
  }
  
};
const handleDeleteCourse = async (id) => {
  try{
   await axios.delete(`http://localhost:8080/api/courses/${id}`);
   setCourses(courses.filter(c => c.id !== id));
   setSelectedCourse(null);
  }
  catch(error){
    console.error('Error deleting course:',error);

  }

};
const handleSaveStudent = async (student) => {
  try{
    if (student.id) {
      const response = await axios.put('http://localhost:8080/api/students',student);
      const updatedStudents = response.data;
      setStudents(students.map(c => (c.id === updatedStudents.id ? updatedStudents : c)));

  } else {

    student.id = nextStudentId;
      const response = await axios.post('http://localhost:8080/api/students',student);
      const newStudents = response.data;
      setStudents([...students,newStudents]);
      setNextStudentId(nextStudentId + 1); // Increment the ID counter

    
  }
  setSelectedStudent(null);
  }
  catch(error)
  {
    console.error('Error saving students:', error);
    // Handle error (e.g., display an error message to the user)
  }
};

const handleDeleteStudent = async (id) => {
  // setStudents(students.filter(s => s.id !== id));
  // setSelectedStudent(null);
  try{
    await axios.delete(`http://localhost:8080/api/students/${id}`);
    setStudents(courses.filter(s => s.id !== id));
    setSelectedStudent(null);
   }
   catch(error){
     console.error('Error deleting students:',error);
 
   }
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
