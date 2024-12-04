import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const AddStudent = () => {

    const navigate=useNavigate();

    const [student, setStudent] = useState({
        fname:'',
        lname:'',
        email:'',
        major:'',
        gpa:''
    });

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setStudent({
            ...student,
            [name]:value
        })
    }

    const sumbitData = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8080/persons", student)
        

        setStudent({
            fname:'',
            lname:'',
            email:'',
            major:'',
            gpa:''
        });
        navigate("/Student")

    }

    return (
        <>
        <h1>Student Adding</h1>
            <form onSubmit={sumbitData}>

                <label>FirstName:</label>
                <input type='text' name='fname' value={student.fname} onChange={handleChange}></input>
                <br />

                <label>LastName:</label>
                <input type='text' name='lname' value={student.lname} onChange={handleChange}></input>
                <br />

                <label>Email:</label>
                <input type='email' name='email' value={student.email} onChange={handleChange}></input>
                <br />

                <label>Major:</label>
                <input type='text' name='major' value={student.major} onChange={handleChange}></input>
                <br />
                
                <label>GPA:</label>
                <input type='number' name='gpa' value={student.gpa} onChange={handleChange}></input>
                <br />

                <button type="submit" >Add Student</button>
            </form>
        </>
    );
}

export default AddStudent;