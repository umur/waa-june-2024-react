import React from "react";
import course from "./Course";

function Student({students}){
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
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Student;