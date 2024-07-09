import { useState } from "react";
import InputField from "../general/InputField";
import axios from "axios";
import Constants from "../../Constants";


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

    async function addCourse(){
      const resp=await axios.post(Constants.courses,course);
      if(resp.status==200){
        setCourse({name:'',code:''});
        alert("Save Success");
      }
      console.log("Creation response is:",resp.data);
     } 

    const handleSubmit=(event)=>{
      event.preventDefault();
      if(course.code=='' || course.name==''){
        alert("Please fill in all the fields");
        return;
      }
      addCourse();
    }

    return ( 
        <div className="container">
        <div className="form-group">
        <h5 className="text-center">Fill in the Course Details</h5>
        <form onSubmit={handleSubmit}>
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
           <button  className="btn btn-primary"
            type="submit" >
            Submit
            </button>
            </form>
        </div>
      </div>        
     );
}

export default CourseForm;