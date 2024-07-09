import { useState } from "react";
import InputField from "../general/InputField";


function CourseForm() {
    let [course,setCourse]=useState({name:'',code:''});
    const handleChange = (event) =>{
        setCourse(course => (
            {
                ...course,
                [event.target.name]: event.target.value
            }
        ))
    }

    return ( 
        <div className="container">
        <div className="form-group">
        <h5 className="text-center">Fill in the Course Details</h5>
          <InputField 
            type="text" 
            label="Name" 
            name="name" 
            value={course.name} 
            onChange={handleChange} 
            className="form-control"
          />
          <InputField 
            type="text" 
            label="Code" 
            name="code" 
            value={course.code} 
            onChange={handleChange} 
            className="form-control"
          />
        </div>
      </div>        
     );
}

export default CourseForm;