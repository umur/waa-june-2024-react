import React from "react";
import course from "./Course";
import axios from "axios";

function Student({students}){
    const onClickDelete = (id)=>{
        axios.delete("http://localhost:8080/students/"+id)
    }
    return (
        <table className="course-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Major</th>
                <th>GPA</th>
                <th>Courses Taken</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            {students.map((student, index) => (
                <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.major}</td>
                    <td>{student.gpa}</td>
                    <td>{student.coursesTaken.map(course=>course.name).join(", ")}</td>
                    <td><input type="button" value="delete" onClick={()=>onClickDelete(student.id)}/></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Student;