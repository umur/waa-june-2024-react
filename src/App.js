import './App.css';
import {useEffect, useState} from "react";
import AddStudentForm from "./AddStudentForm";
import AddCourseForm from "./AddCourseForm";
import StudentList from "./StudentList";
import CourseList from "./CourseList";

function App() {
    useEffect(() => {
        document.title = "Student and Course Management System";
    }, []);
    const [students, setStudents] = useState([
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            major: 'Computer Science',
            gpa: 3.5,
            coursesTaken: [
                {id: 101, name: 'Intro to Computer Science', code: 'CS101'},
                {id: 102, name: 'Data Structures', code: 'CS102'}
            ]
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'john.smith@example.com',
            major: 'Computer Science',
            gpa: 3.0,
            coursesTaken: [
                {id: 101, name: 'Intro to Computer Science', code: 'CS101'},
                {id: 102, name: 'Data Structures', code: 'CS102'}
            ]
        }
    ]);

    const [courses, setCourses] = useState([
        {id: 101, name: 'Intro to Computer Science', code: 'CS101'},
        {id: 102, name: 'Data Structures', code: 'CS102'},
        {id: 103, name: 'Algorithms', code: 'CS103'},
        {id: 104, name: 'Database Systems', code: 'CS104'}
    ]);
    const [selectedMajor, setSelectedMajor] = useState('');

    const handleAddStudent = (student) => {
        setStudents([...students, {...student, id: Math.random()}]); // Random ID for example purposes
    };

    const handleAddCourse = (course) => {
        setCourses([...courses, {...course, id: Math.random()}]); // Random ID for example purposes
    };
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
