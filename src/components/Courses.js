import React, { useState, useEffect } from "react";
import { getCourses, deleteCourse } from "../services/api";
import CourseForm from "./CourseForm";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const result = await getCourses();
        setCourses(result.data);
    }

    const handleDelete = async (id) => {
        await deleteCourse(id);
        fetchCourses();
    }

    return (
        <div>
            <h2>Courses</h2>
            <table className='customTable mb-2'>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>{course.code}</td>
                            <td>
                                <button className="btnDelete" onClick={() => handleDelete(course.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <CourseForm fetchCourses={fetchCourses} />
        </div>
    );
}
export default Courses;