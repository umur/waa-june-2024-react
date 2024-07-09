import axios from "axios";
import { useEffect, useState } from "react";
import Constants from "../../Constants";

function CourseTable(props) {
  useEffect(
    ()=>{
        getCourses();
    }
    ,[]);

   async function getCourses(){
    const resp=await axios.get(Constants.courses);
    setCourses(resp.data);
   } 

   let [courses,setCourses]=useState([]);

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
