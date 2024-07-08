import React from "react";
import { useState } from "react";
import { Course } from "./Course";

export function Student(props) {


    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const onClickHandler = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    // Popup component for displaying courses in a table
  const CoursesPopup = () => (
    <div style={{ display: isPopupVisible ? 'block' : 'none' }}>
      <h2>Courses List</h2>
    {
      props.courses.map((course) => {
          return <Course key={course.id} name={course.name} code={course.code} />
        })
    }

    </div>
  );


    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Major</th>
                    <th>GPA</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.fname}</td>
                    <td>{props.lname}</td>
                    <td>{props.email}</td>
                    <td>{props.major}</td>
                    <td>{props.gpa}</td>
                    <td><button onClick={onClickHandler}>Show Courses</button></td>
                </tr>
            </tbody>
        </table>
        <CoursesPopup />
        </div>


    );
}