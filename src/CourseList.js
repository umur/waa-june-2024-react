import React from "react";
import Course from "./Course";

function CourseList({courses}) {
    return (
        <div>
            <h3>Courses Offered:</h3>
            {

                courses.map(course => (
                    <Course key={course.id} course={course}/>
                ))
            }
        </div>
    )
}

export default CourseList;
