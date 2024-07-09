import { useState } from "react";

function CourseTable(props) {
    let [courses,setCourses]=useState([{id:1,name:"FPP",code:"FPP"},{id:2,name:"MPP",code:"MPP"},{id:3,name:"EA",code:"EA"},{id:4,name:"WAA",code:"WAA"},{id:5,name:"WAP",code:"WAP"},{id:6,name:"ASD",code:"ASD"}]);

   return (  
         <div className="container">
    <h3 className="text-center">Student Details</h3>
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>Course Code</th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map(x=>(
            <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.code}</td>
            </tr>
            )
            )
          }
        </tbody>
      </table>
    </div> );
}

export default CourseTable;
