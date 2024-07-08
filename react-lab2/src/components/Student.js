import React, {useState} from "react";
import Course from "./Course";

function Student({students}){
    return(
       <div>
           <table>
               <thead>
               <tr>
                   <th>Student ID</th>
                   <th>Firstname</th>
                   <th>Lastname</th>
                   <th>Email</th>
                   <th>Major</th>
                   <th>GPA</th>
                   <th>CoursesTaken</th>
               </tr>
               </thead>
               {
                   students.map((student) => {
                       let courses = student.coursesTaken;
                       return (
                           <tr key={student.id}>
                               <td>{student.id}</td>
                               <td>{student.firstName}</td>
                               <td>{student.lastName}</td>
                               <td>{student.email}</td>
                               <td>{student.major}</td>
                               <td>{student.gpa}</td>
                               <td>{courses.map(course=>course.name).join(", ")}</td>
                           </tr>
                       );
                   })
               }
           </table>
       </div>
    );
}
export default Student;