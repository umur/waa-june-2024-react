import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentDetail from "./components/student/StudentDetail.jsx";
import Student from "./components/Student.js";
import Course from "./components/course/Course.js";
import CourseDetail from "./components/course/CourseDetail.jsx";

function App() {
    const [courses, setCourses] = useState([
            new Course(1, "Introduction to React", "REACT101"),
            new Course(2, "Advanced React", "REACT102"),
            new Course(3, "JavaScript Fundamentals", "JS101"),
            new Course(4, "Database Management", "DBMS101"),
            new Course(5, "Software Engineering", "SE101")
        ]
    )

    // Generate sample students with random data
    const generateStudents = () => {
        let students = [];
        for (let i = 1; i <= 5; i++) {
            let firstName = `Student${i}`;
            let lastName = `LastName${i}`;
            let email = `student${i}@example.com`;
            let major = i % 2 === 0 ? "Computer Science" : "Electrical Engineering"; // Alternating majors
            let gpa = parseFloat((Math.random() * (4.0 - 2.0) + 2.0).toFixed(2)); // Random GPA between 2.0 to 4.0
            let coursesTaken = generateRandomCourses(5); // Generate 5 random courses for each student
            students.push(new Student(i, firstName, lastName, email, major, gpa, coursesTaken));
        }
        return students;
    };

    // Helper function to generate random courses
    const generateRandomCourses = (numCourses) => {
        let randomCourses = [];
        for (let i = 0; i < numCourses; i++) {
            let randomIndex = Math.floor(Math.random() * courses.length);
            randomCourses.push(courses[randomIndex]);
        }
        return randomCourses;
    };

    const [students, setStudents] = useState(generateStudents())


    const onAddStudent = (student) => {
        setStudents([...students, student]);
    }
    const onRemoveStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    }
    const onUpdateStudent = (id, updatedStudent) => {
        setStudents(students.map(student=> student.id===id?updatedStudent:student));
    }

    const onAddCourse = (course) => {
        setCourses([...courses, course]);
    }
    const onRemoveCourse = (id) => {
        setCourses(courses.filter(course => course.id !== id));
    }

    const onUpdateCourse = (id, updatedCourse) => {
        setCourses(courses.map(course => (course.id === id ? updatedCourse : course)));
    }


    return (
        <div className="container-fluid">
            <h1>Students and Courses</h1>
            <div className="row">
                <StudentDetail students={students}
                               courses={courses}
                               onAddStudent={onAddStudent}
                               onUpdateStudent={onUpdateStudent}
                               onDeleteStudent={onRemoveStudent}
                />
                </div>

            <hr/>

            <div className="row">
                <CourseDetail
                    courses={courses}
                    onAddCourse={onAddCourse}
                    onRemoveCourse={onRemoveCourse}
                    onUpdateCourse={onUpdateCourse}
                />
            </div>
        </div>
    )
}

export default App
