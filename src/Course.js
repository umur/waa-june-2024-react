import React from "react";

function Course({course}) {
    return (
        <div>
            <h4>{course.name}</h4>
            <p>Code: {course.code}</p>
        </div>
    )
}

export default Course;
