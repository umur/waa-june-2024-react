import React from "react";
import {courses } from "../../data/data";
import CreateCourse from "./CreateCourse";
import CourseList from "./CourseList";
import "./course.css";

export default function Student () {
    return (
        <div className="students">
            <p className="title">List of Courses</p>
            {/* <button className="student-create">Add Student</button> */}
            <CourseList courses={courses}/>
            <CreateCourse/>
        </div>
     
    )
  
    
}