import React, {useEffect, useState} from "react";
import axios from "axios";

function Course(){

    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({
        id: "",
        name: "",
        code: ""
    });
    const [editCourse, setEditCourse] = useState(false);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const response = await axios.get("http://localhost:8080/courses");
        setCourses(response.data);
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setNewCourse({...newCourse, [name]: value});
    };

    const handleAddCourse = async() => {
        await axios.post("http://localhost:8080/courses",newCourse);
        fetchCourses();
        setNewCourse({id:"",name:"",code:""});
    };

    const handleDeleteCourse = async(id) => {
        await axios.delete(`http://localhost:8080/courses/${id}`);
        fetchCourses();
    };

    const handleEditCourse = (course) => {
        setNewCourse(course);
        setEditCourse(true);
    }

    const handleUpdateCourse = async() => {
        await axios.put(`http://localhost:8080/courses/${newCourse.id}`,newCourse);
        fetchCourses();
        setNewCourse({id:"",name:"",code:""})
        setEditCourse(false);
    }

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Course Code</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((course) => {
                    return (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.code}</td>
                            <td>
                                <button onClick={()=> handleDeleteCourse(course.id)}>Delete</button>
                                <button onClick={()=>handleEditCourse(course)}>Edit</button>
                            </td>
                        </tr>
                    );}
                )}
                </tbody>
            </table>

            <h3> { editCourse ? "Edit Course" : "Add new Course"}</h3>
            <input
                name="id"
                placeholder="Course Id"
                value = {newCourse.id}
                onChange={onChange}
                disabled={!!editCourse}
             />
            <input
                name="name"
                placeholder="Course Name"
                value={newCourse.name}
                onChange={onChange}
             />
            <input
                name="code"
                placeholder="Course code"
                value={newCourse.code}
                onChange={onChange}
            />
            <button onClick={editCourse ? handleUpdateCourse : handleAddCourse}>
                {editCourse ? "Edit Course" : "Add Course"}</button>
        </div>
    );
}

export default Course;