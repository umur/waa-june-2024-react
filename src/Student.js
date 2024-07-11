import React, { useEffect, useState } from "react";
import AddButtom from './AddButtom';
import axios, {get} from "axios";
import {useNavigate} from "react-router";
import './Table.css';
import { Link } from "react-router-dom";

const App = () => {

    const navigate = useNavigate();
    const data = []

    const [dataState, setDataState] = useState(data);

    const getAllStudents = async()=>{
        const result= await axios.get("http://localhost:8080/persons");
        setDataState(result.data);
    }

    useEffect(()=>{
        getAllStudents();
    },[]);

    const addStudentForm =() =>{
        console.log("Route Change");
        navigate("/AddStudent")
    }

    const deleteStudent= (id) =>{
        console.log("Delete Id:"+id);
        axios.delete("http://localhost:8080/persons/"+id);
        // window.location.reload();
        navigate("/Student");
    }

    return (
        <><h1>Student List</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5%' }} onClick={()=> addStudentForm()}>
                <AddButtom />
            </div>
            <br />
            <div className="table-container">
                <table className="bordered-table">
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Major</th>
                        <th>GPA</th>
                        <th>Action</th>
                    </tr>
                    {dataState.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.fname}</td>
                                <td>{val.lname}</td>
                                <td>{val.email}</td>
                                <td>{val.major}</td>
                                <td>{val.gpa}</td>
                                <td><p onClick={()=>deleteStudent(val.id)} style={{color:'red'}}><u>Delete</u></p></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    )
}

export default App;
