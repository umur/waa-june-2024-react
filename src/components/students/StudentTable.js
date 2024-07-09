import { useState } from "react";
import CourseTable from "../courses/CourseTable";

function StudentTable() {
    const courses = [
        { id: 1, name: "FPP", code: "FPP" },
        { id: 2, name: "MPP", code: "MPP" },
        { id: 3, name: "EA", code: "EA" },
        { id: 4, name: "WAA", code: "WAA" },
        { id: 5, name: "WAP", code: "WAP" },
        { id: 6, name: "ASD", code: "ASD" }
      ];
    const [students,setStudents] = useState([
        {
            id:1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          major: 'Computer Science',
          gpa: 3.5,
          coursesTaken: [courses[0], courses[1]]
        },
        {
            id:2,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          major: 'Software Engineering',
          gpa: 3.8,
          coursesTaken: [courses[2], courses[3]]
        },
        {
            id:3,
          firstName: 'Alice',
          lastName: 'Johnson',
          email: 'alice.johnson@example.com',
          major: 'Information Technology',
          gpa: 3.2,
          coursesTaken: [courses[4], courses[5]]
        },
        {
            id:4,
          firstName: 'Bob',
          lastName: 'Brown',
          email: 'bob.brown@example.com',
          major: 'Data Science',
          gpa: 3.7,
          coursesTaken: [courses[1], courses[2]]
        },
        {
            id:5,
          firstName: 'Carol',
          lastName: 'Davis',
          email: 'carol.davis@example.com',
          major: 'Cyber Security',
          gpa: 3.6,
          coursesTaken: [courses[3], courses[4]]
        }
    
      ]);
    
    return ( 
        <div className="container">
  <h3 className="text-center">Student Details</h3>
  <table className="table table-striped table-bordered">
    <thead className="thead-dark">
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Major</th>
        <th>GPA</th>
        <th>Courses Taken</th>
      </tr>
    </thead>
    <tbody>
      {students.map((x) => (
        <tr key={x.id}>
          <td>{x.id}</td>
          <td>{x.firstName}</td>
          <td>{x.lastName}</td>
          <td>{x.email}</td>
          <td>{x.major}</td>
          <td>{x.gpa}</td>
          <td>{x.coursesTaken.map((course) => course.name).join(', ')}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
     );
}

export default StudentTable;