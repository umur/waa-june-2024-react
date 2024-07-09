import { useEffect, useState } from "react";
import InputField from "../general/InputField";
import MultiSelect from "../general/MultiSelect";
import axios from "axios";
import Constants from "../../Constants";


function StudentForm() {
    let [student,setStudent]=useState({firstName:'',lastName:'',email:'',major:'',gpa:0.0,coursesTaken:[]});

    useEffect(
        ()=>{
            getCourses();
        }
        ,[]);
    
       async function getCourses(){
        const resp=await axios.get(Constants.courses);
        setCourses(resp.data);
       } 
       
    let [courses,setCourses]=useState([]);
    

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

    function getCoursesTaken(courseIds) {
        return courseIds.map(courseId => {
            return courses.find(course => course.id == courseId);
        });
    }
       

 
    async function addStudent(){
        const resp=await axios.post(Constants.students,{...student,coursesTaken:getCoursesTaken(student.coursesTaken)});
        if(resp.status==200){
          setStudent({firstName:'',lastName:'',email:'',major:'',gpa:0.0,coursesTaken:[]});
          alert("Save Success");
        }
        console.log("Creation response is:",resp.data);
       } 
  
      const handleSubmit=(event)=>{
        event.preventDefault();
        if(student.firstName=='' || student.lastName=='' || student.email=='' || student.gpa=='' || student.major=='' || student.coursesTaken.length==0){
          alert("Please fill in all the fields");
          return;
        }
        addStudent();
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

            <button  className="btn btn-primary"
            type="submit" >
            Submit
            </button>
            </form>
        </div>
     );
}

export default StudentForm;