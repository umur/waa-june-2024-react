import React, {useState} from "react";

export default function CreateCourse () {
    const [state, setState] = useState({
        name: "",
        code: ""
    })

    const handleOnChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})

    }
    return (
    <form className="form">   
      <p className="title">Create of Course</p>      
        <div className="form-elements">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={state.name}  onChange={handleOnChange}/>
        </div>
        <div className="form-elements">
            <label for="code">Code:</label>
            <input type="text" id="code" name="code" value={state.code} onChange={handleOnChange}/>
        </div>

    <input type="submit" value="Submit" />
    </form>

    )}