import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";
import { Course } from "./Course";

export function CourseDetail(props) {

    const params = useParams();

    const [courseDetailState, setCourseDetailState] = useState([]);

    useEffect(() => {
        const getCourseDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/courses/${params.id}/courses`);
                setCourseDetailState(response.data);
            } catch (error) {
                console.error('Error fetching course details:', error);
            }
        };
        getCourseDetail();

    }, [params.id]);

    return (
        <div>
            <h2>Courses List</h2>

            {courseDetailState.map((course) => (
                <Course key={course.id} name={course.name} code={course.code} />
            ))}
        </div>
    );

}