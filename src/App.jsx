import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentDetail from "./components/student/StudentDetail.jsx";
import Student from "./components/Student.js";
import Course from "./components/course/Course.js";
import CourseDetail from "./components/course/CourseDetail.jsx";
import axios from "axios";

function App() {
    // set default url
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


    const [courses, setCourses] = useState([])
    const [students, setStudents] = useState([])

    const getAllStudents = async () => {
        const result = await axios.get('/students');

        setStudents(result.data);
    };

    const getAllCourses = async () => {
        const result = await axios.get('/courses');

        setCourses(result.data);
    };

    const fetchDetails = ()=>{
        getAllCourses();
        getAllStudents();
    };

    useEffect(() => {
       fetchDetails()
    }, []);


    const onRemoveStudent = async (id) => {
       await axios.delete(`/students/${id}`);

       getAllStudents();
    }

    const onAddCourse = (course) => {
        setCourses([...courses, course]);
    }
    const onRemoveCourse = async (id) => {
        await axios.delete(`/courses/${id}`);

        getAllCourses();
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
                               onStudentChanged={getAllStudents}
                               onDeleteStudent={onRemoveStudent}
                />
            </div>

            <hr/>

            <div className="row">
                <CourseDetail
                    courses={courses}
                    onAddCourse={onAddCourse}
                    onCourseChanged={getAllCourses}
                    onRemoveCourse={onRemoveCourse}
                    onUpdateCourse={onUpdateCourse}
                />
            </div>
        </div>
    )
}

export default App
