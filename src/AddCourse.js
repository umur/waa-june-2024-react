import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AddCourse = () => {

    const navigate = useNavigate();

    const [course, setCourse] = useState({
        'name': '',
        'code': ''
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCourse({ ...course, [name]: value });
    }

    const sumbitCourse = () => {
        axios.post("http://localhost:8080/course", course);
        setCourse({
            'name': '',
            'code': ''
        });
        navigate("/Course")
    }

    return (
        <>
            <h1>Course Adding</h1>
            <form onSubmit={sumbitCourse}>
                <label >Name</label>
                <input type="text" name="name" value={course.name} onChange={handleChange} />
                <br />

                <label >Code</label>
                <input type="text" name="code" value={course.code} onChange={handleChange} />

                <br />
                <button type="submit" >Add Student</button>
            </form>
        </>
    );

}
export default AddCourse;