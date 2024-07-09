import React, { useState, useEffect } from "react";
import { getStudents, deleteStudent } from "../services/api";
import { getCourses, deleteCourse } from "../services/api";
import Courses from "./Courses";
import Students from "./Students";

const Management = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchStudents();
        fetchCourses();
    }, []);

    const fetchStudents = async () => {
        const result = await getStudents();
        setStudents(result.data);
    }

    const fetchCourses = async () => {
        const result = await getCourses();
        setCourses(result.data);
    }

    const handleDeleteStudent = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    };

    const handleDeleteCourse = async (id) => {
        await deleteCourse(id);
        fetchCourses();
    }

    return (
        <>
            <Students courses={courses} students={students} handleDelete={handleDeleteStudent} fetchStudents={fetchStudents} />
            <Courses courses={courses} handleDelete={handleDeleteCourse} fetchCourses={fetchCourses} />
        </>
    );

}

export default Management;

