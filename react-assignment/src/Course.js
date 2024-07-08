import React from "react";

export default function Course(course){
    return (
        <tr>
            <td>{course.id}</td>
            <td>{course.courseName}</td>
            <td>Credit: {course.credit}</td>
            <td>Course Code: {course.courseCode}</td>
        </tr>
    );
}