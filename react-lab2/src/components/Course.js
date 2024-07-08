import React from "react";

function Course({courses}){

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Course Code</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((course) => {
                    return (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.code}</td>
                        </tr>
                    );}
                )}
                </tbody>
            </table>
        </div>
    );
}

export default Course;