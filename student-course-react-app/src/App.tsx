import {Fragment, useState} from 'react'
import './App.css'
import CourseTable from "./component/Table/CourseTable";
import Course from "./component/Course";
import StudentTable from "./component/Table/StudentTable";
import Student from "./component/Student";

function App() {
  return (
      <Fragment>
        <div className="App">
          <h1>Courses</h1>
          <CourseTable/>
          <Course/>

          <h1>Students</h1>
          <StudentTable/>
          <Student/>
        </div>
      </Fragment>
  );
}

export default App
