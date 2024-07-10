import React from "react";
import axios from "axios";
function Course({courses}){
    const deleteOnClicked = (id)=>{
        axios.delete("http://localhost:8080/courses/"+id);
    }

    return (
                <table className="course-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th></th>
                        </tr>
                    </thead>

                 <tbody>
                 {courses.map((course,index)=>(
                     <tr key={index}>
                         <td>{course.id}</td>
                         <td>{course.name}</td>
                         <td>{course.code}</td>
                         <td><input type="button" value="delete" onClick={()=>deleteOnClicked(course.id)}/> </td>
                     </tr>
                 ))}
                 </tbody>
                </table>
    );
}
export default Course;
