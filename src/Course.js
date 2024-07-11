import React, { useEffect } from "react";
import AddButtom from './AddButtom';
import './Table.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const App = () => {
    const navigate=useNavigate();
    const data = []

    const [dataState, setDataState] = useState(data);

    const getAllCourseList = async () => {
        const result= await axios.get("http://localhost:8080/course")
        setDataState(result.data);
    }

    useEffect(()=>{
        getAllCourseList();
    },[]);

    const addCourse=()=>{
        navigate('/AddCourse')
    }

    const deleteCourse= (id) =>{
        console.log("Delete Id:"+id);
        axios.delete("http://localhost:8080/course/"+id);
        // window.location.reload();
        navigate("/Course");
    }

    return (

        <><h1>Course List</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5%' }} onClick={()=>addCourse()}>
                <AddButtom />
            </div>
            <br />
            <div className="table-container">
                <table className="bordered-table">
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                    {dataState.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.code}</td>
                                <td><p onClick={()=>deleteCourse(val.id)} style={{color:'red'}}><u>Delete</u></p></td>
                            </tr>
                        );
                    })}
                </table>
            </div >

        </>
    )
}

export default App;
