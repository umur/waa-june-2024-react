import React, {useState} from "react";
import axios from "axios";

function CreateCourse(){
    const [courseState,setCourseState] = useState({
        id:'',
        name:'',
        code:'',
    });

    const onSaveButtonClicked = ()=>{
        axios.post("http://localhost:8080/courses",courseState);
    }
    const onUpdateButtonClicked = ()=>{
        axios.put("http://localhost:8080/courses/"+courseState.id,courseState);
    }
    const onChange = (event)=>{
        setCourseState({...courseState,[event.target.name]:event.target.value,})
    }

    return (
        <div>
            ID:
            &nbsp;&nbsp;
            <input type="number"
                onChange={onChange}
                   value={courseState.id}
                   name='id'/>
            &nbsp;&nbsp;
            Name:
            &nbsp;&nbsp;
            <input
                type="text"
                onChange={onChange}
                value={courseState.name}
                name='name'/>
            &nbsp;&nbsp;
            Code:
            &nbsp;&nbsp;
            <input
                type="text"
                onChange={onChange}
                value={courseState.code}
                name='code'/>
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

export default CreateCourse;