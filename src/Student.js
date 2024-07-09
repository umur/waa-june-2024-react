import React from "react";

function Student({student}) {
    return (
        <div>
            <div>
                <h2>{student.lastName}, {student.firstName}</h2>
                <p>Email: {student.email}</p>
                <p>Major: {student.major}</p>
                <p>GPA: {student.gpa}</p>

                <ul>
                    {student.coursesTaken.map((course) => (
                        <li key={course.id}>{course.name} ({course.code})</li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Student;
