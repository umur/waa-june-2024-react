import React from "react";

export default function CourseList ({courses}) {

    return (
        <>
        <div className="course-header-wrapper">
            <div className="course-header">
                <span>Name</span>
                <span>Code</span>
                <span></span>
            </div>
        {
            courses.map(course => (
                <div className="course-lists">
                <li>{course.name}</li>
                <li>{course.code}</li>
                <li>Details</li>
                </div>
            ))
        }
          </div>
        </>
     
    )
  
    
}