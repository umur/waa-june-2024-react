import React from "react";
import "./student.css";

export default function StudentList ({students}) {
    return (
        <>
   
        <div className="student-header-wrapper">
        <p className="title">Lists of Students</p> 
            <div className="student-header">
                <span>First Name</span>
                <span>Last Name</span>
                <span>Email</span>
                <span></span>
               
            </div>
        {
            students.map(course => (
                <div className="student-lists">
                <li>{course.firstName}</li>
                <li>{course.lastName}</li>
                <li>{course.email}</li>
                <li>Details</li>
                </div>
            ))
        }
          </div>
        </>
     
    )
  
    
}