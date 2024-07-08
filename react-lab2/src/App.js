import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Student from "./components/Student";
import Course from "./components/Course";

function App() {
  const [courses,setCourses] = useState([
    {
      "id": 1,
      "name": "WAA",
      "code": 545
    },
    {
      "id": 2,
      "name": "EA",
      "code": 544
    }
  ]);
  const [students, setStudents] = useState([
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@doe.com",
      "major": "IT",
      "gpa": 4.0,
      "coursesTaken": courses
    },
    {
      "id": 2,
      "firstName": "Eddy",
      "lastName": "Jim",
      "email": "eddy@jim.com",
      "major": "IT",
      "gpa": 4.0,
      "coursesTaken": [courses[0]]
    }
  ]);

  return (
    <div className="App">
      <div>
        <h2>Student and Course Information</h2>
          <div>
            <Student students={students}/>
            <Course courses={courses}/>
          </div>
      </div>
    </div>
  );
}

export default App;
