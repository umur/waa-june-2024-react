import React from "react";
import Student from "./Student";

function StudentList({students}) {
    return (
        <div>
            {
                students.map((student) => (
                    <Student key={student.id} student={student}/>
                ))
            }
        </div>
    )
}

export default StudentList;
