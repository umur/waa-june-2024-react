import React from "react";
import StudentList from "./StudentList";
import CreateStudent from "./CreateStudent";
import {students} from "../../data/data";
import "./student.css";

export default function Student () {
    return (
        <div className="student-container">
          <StudentList students={students}/>
          <CreateStudent />
      
        </div>
     
    )
  
    
}