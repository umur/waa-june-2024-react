import './App.css';
import Course from "./Course";
import Student from "./Student";
import CreateCourse from "./CreateCourse";
import {useEffect, useState} from "react";
import axios,{get} from  "axios";
import CreateStudent from "./CreateStudent";
function App() {
    const courses = [
        {id:1,name:"WAA",code:"123"}
    ];

    const students = [
        {id:1,firstName:"gg",lastName:"hh",email:"gh@miu.edu",major:"compro",gpa:4,coursesTaken:courses},
    ]

    const [courseState, setCourseState] = useState(courses);

    const [studentState,setStudentState]=useState(students);

    const getAllCourse = async ()=>{
        const result = await axios.get("http://localhost:8080/courses");
        setCourseState(result.data);
    }

    const getAllStudent = async ()=>{
        const result = await axios.get("http://localhost:8080/students");
        setStudentState(result.data);
    }

    useEffect(()=>{
        getAllCourse();
        getAllStudent();
    })

  return (
    <div>
        <h1>Course Lists</h1>

        <Course courses={courseState}></Course>
        <h3>Course Operations</h3>
        <CreateCourse></CreateCourse>
        <br/>
        <h1>Student Lists</h1>
        <Student students={studentState}></Student>
        <h3>Student Operations</h3>
        <CreateStudent></CreateStudent>
    </div>
  );
}

export default App;
