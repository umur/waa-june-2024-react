import React, {useState} from "react";
import axios from "axios";

function CreateStudent(){
    const [studentState,setStudentState] = useState({
        id:'',
        firstName:'',
        lastName:'',
        email:'',
        major:'',
        gpa:'',
        coursesTaken:[]
    });

    const onSaveButtonClicked = ()=>{
        axios.post("http://localhost:8080/students",studentState);
    }
    const onUpdateButtonClicked = ()=>{
        axios.put("http://localhost:8080/students/"+studentState.id,studentState);
    }
    const onChange = (event)=>{
        setStudentState({...studentState,[event.target.name]:event.target.value,})
    }

    return (
        <div>
            ID:
            &nbsp;&nbsp;
            <input type="number"
                   onChange={onChange}
                   value={studentState.id}
                   name='id'/>
            &nbsp;&nbsp;
            First Name:
            &nbsp;&nbsp;
            <input
                type="text"
                onChange={onChange}
                value={studentState.firstName}
                name='firstName'/>
            Last Name:
            &nbsp;&nbsp;
            <input
                type="text"
                onChange={onChange}
                value={studentState.lastName}
                name='lastName'/>
            &nbsp;&nbsp;
            Email:
            &nbsp;&nbsp;
            <input
                type="text"
                onChange={onChange}
                value={studentState.email}
                name='email'/>
            Major:
            &nbsp;&nbsp;
            <input
                type="text"
                onChange={onChange}
                value={studentState.major}
                name='major'/>
            &nbsp;&nbsp;
            GPA:
            &nbsp;&nbsp;
            <input
                type="text"
                onChange={onChange}
                value={studentState.gpa}
                name='gpa'/>
            &nbsp;&nbsp;
            <input type="button"
                   value='create'
                   onClick={onSaveButtonClicked}
            />
            &nbsp;&nbsp;
            <input type="button"
                   value='update'
                   onClick={onUpdateButtonClicked}
            />
        </div>
    )
}

export default CreateStudent;