import { useEffect, useState } from "react";
import axios from "axios";
import Constant from "../../assets/Constant";

const StudentTable = () => {
    useEffect(()=>{getStudents()},[]);
    async function getStudents(){
        const resp=await axios.get(Constant.students);
        setStudents(resp.data);
    }
    const [students,setStudents] = useState([]);

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