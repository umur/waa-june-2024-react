import './App.css';
import {useEffect, useState} from "react";
import AddStudentForm from "./AddStudentForm";
import AddCourseForm from "./AddCourseForm";
import StudentList from "./StudentList";
import CourseList from "./CourseList";
import axios from "axios";

function App() {
    useEffect(() => {
        document.title = "Student and Course Management System";
    }, []);

    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const [selectedMajor, setSelectedMajor] = useState('');

    const handleAddStudent = (student) => {
        setStudents([...students, {...student, id: student.id}]);
    };

    const handleAddCourse = (course) => {
        setCourses([...courses, {...course, id: course.id}]);
    };

    const getStudents = async () => {
        const response = await axios.get('http://localhost:8080/students');
        console.log(response.data);
        setStudents(response.data);

    };

    const getCourses = async () => {
        const response = await axios.get('http://localhost:8080/courses');
        console.log(response.data);
        setCourses(response.data);
    };

    useEffect(() => {
        getStudents();
    }, []);

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <div className="App">
            <h1>Student and Course Management System</h1>
            <AddStudentForm onAddStudent={handleAddStudent}/>
            <AddCourseForm onAddCourse={handleAddCourse}/>
            <StudentList students={students}/>
            <CourseList courses={courses}/>
        </div>
    );
}

export default App;
