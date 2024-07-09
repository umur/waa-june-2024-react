import { useState } from "react";
import InputField from "../general/InputField";
import MultiSelect from "../general/MultiSelect";


function StudentForm() {
    let [student,setStudent]=useState({firstName:'',lastName:'',email:'',major:'',gpa:0.0,coursesTaken:[]});
    const courses=[{id:1,name:"FPP",code:"FPP"},{id:2,name:"MPP",code:"MPP"},{id:3,name:"EA",code:"EA"},{id:4,name:"WAA",code:"WAA"},{id:5,name:"WAP",code:"WAP"},{id:6,name:"ASD",code:"ASD"}]

    const handleChange = (event) =>{
        setStudent(student => (
            {
                ...student,
                [event.target.name]: event.target.value
            }
        ))
    }

    const onCoursesChanged=function(newValue){
        setStudent(student => ({ ...student, coursesTaken: newValue }));
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("State of student now",student);
        validateFields();
    }
    function validateFields(){

    }

    return ( 
        <div>
        <h5 className="text-center">Fill in the Student Details</h5>
        <form onSubmit={handleSubmit}>
            <InputField 
            type="text"
            label="First Name"
            name="firstName"
            value={student.firstName} 
            onChange={handleChange}
            />
            <InputField 
            type="text"
            label="Last Name"
            name="lastName"
            value={student.lastName} 
            onChange={handleChange}
            />
            <InputField 
            type="text"
            label="Email"
            name="email"
            value={student.email} 
            onChange={handleChange}
            />
            <InputField 
            type="text"
            label="Major"
            name="major"
            value={student.major} 
            onChange={handleChange}
            />
            <InputField 
            type="number"
            label="GPA"
            value={student.gpa} 
            name="gpa"
            onChange={handleChange}
            />
            <MultiSelect
            label="Courses"
             data={courses.map(x=>({key:x.id,value:x.name+" ("+x.code+")"}))}
             selected={student.coursesTaken}
             onChange={onCoursesChanged}
            />

            <button 
            type="submit" >
            Submit
            </button>
            </form>
        </div>
     );
}

export default StudentForm;