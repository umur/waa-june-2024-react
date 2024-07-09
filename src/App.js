import './App.css';
import {Student} from './Student';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const students = [];

    const [studentState, setStudentState] = useState(students);
    const getAllStudents = async () => {
        const result = await axios.get("http://localhost:8080/students");
        setStudentState(result.data);
    }

    useEffect(() => {
        getAllStudents();
    }, []);

    return (
        <div className="App">


            <h2>Student List</h2>
            {
                studentState.map((student) => {
                    return <Student key={student.id} fname={student.firstName} lname={student.lastName}
                                    email={student.email} major={student.major} gpa={student.gpa}
                                    courses={student.coursesTaken}/>
                })
            }

        </div>
    );
}

export default App;
