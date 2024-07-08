import React, { useState } from "react";
import { createCourse } from "../services/api";

const CourseForm = ({ fetchCourses }) => {
    const defaultCourse = {
        name: '',
        code: '',
    };

    const [course, setCourse] = useState(defaultCourse);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({
            ...course,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCourse(course);
        setCourse(defaultCourse);
        fetchCourses();
    }

    return (
        <div className="center">
            <form onSubmit={handleSubmit}>
                <label>Course Name</label>
                <input className="mr-2 ml-1" type="text" name="name" value={course.name} onChange={handleChange} />
                <label>Course Code</label>
                <input className="mr-2 ml-1" type="text" name="code" value={course.code} onChange={handleChange} />
                <button className="btnSubmit" type="submit">Add Course</button>
            </form>
        </div>
        
    )
}
export default CourseForm;