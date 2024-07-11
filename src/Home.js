import React, {useEffect, useState} from "react";
import axios from "axios";
import {Student} from "./Student";

export function Home() {
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

        <div>

            <h2>Student List</h2>
            {
                studentState.map((student) => {
                    return <Student key={student.id} id={student.id} fname={student.firstName} lname={student.lastName}
                                    email={student.email} major={student.major} gpa={student.gpa}
                                    courses={student.coursesTaken}/>
                })
            }
        </div>

    );
}