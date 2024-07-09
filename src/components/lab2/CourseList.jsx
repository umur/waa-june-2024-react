import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
            const response = await axios.get('/courses');
            setCourses(response.data);
        } catch (error) {
            console.error('getCourses: ', error);
        }
    };
    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.name} ({course.code})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
