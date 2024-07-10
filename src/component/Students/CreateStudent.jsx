import React, { useState } from "react";
import {majors} from "../../data/data";

export default function CreateStudent () {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gpa: "",
        coursesTaken: "",
        major: "",
    })

    const handleOnChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})

    }
    return (
        <form className="form">  
         <p className="title">Create of Student</p>    
        <div className="form-elements">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={state.firstName}  onChange={handleOnChange}/>
        </div>
        <div className="form-elements">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={state.lastName}  onChange={handleOnChange}/>
        </div>
        <div className="form-elements">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" value={state.email}  onChange={handleOnChange}/>
        </div>
        <div className="form-elements">
            <label for="gpa">Gpa:</label>
            <input type="number" id="gpa" name="gpa" value={state.gpa} onChange={handleOnChange}/>
        </div>
        <div className="form-elements">
        <label for="coursesTaken">Course Taken:</label>
        <input type="text" id="coursesTaken" name="coursesTaken" value={state.coursesTaken} onChange={handleOnChange}/>      
    </div>
    <div className="form-elements">
        <label for="major">Major:</label>
        <select id="major" name="major" onChange={handleOnChange}>
                {
                  majors.map(major => (
                    <option value={major.name} id={major.id}>{major.name}</option>
                  ))  
                }
        </select>
    </div>

    <input type="submit" value="Submit" />
    </form>
     
    )
  
    
}