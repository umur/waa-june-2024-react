import React from "react";
function Course({courses}){
    return (
                <table className="course-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Code</th>
                        </tr>
                    </thead>

                 <tbody>
                 {courses.map((course,index)=>(
                     <tr key={index}>
                         <td>{course.id}</td>
                         <td>{course.name}</td>
                         <td>{course.code}</td>
                     </tr>
                 ))}
                 </tbody>
                </table>
    );
}
export default Course;
