import React, { useState } from "react";
import { createStudent } from "../services/api";

const StudentForm = (props) => {
    const { courses, fetchStudents } = props;

    const defaultStudent = {
        firstName: '',
        lastName: '',
        email: '',
        major: '',
        gpa: '',
        coursesTaken: [],
    };

    const [student, setStudent] = useState(defaultStudent);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createStudent(student);
        setStudent(defaultStudent);
        fetchStudents();
    } 

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input className="mr-2 ml-1" type="text" name="firstName" value={student.firstName} onChange={handleChange} />
            <label>Last Name</label>
            <input className="mr-2 ml-1" type="text" name="lastName" value={student.lastName} onChange={handleChange} />
            <label>Email</label>
            <input className="mr-2 ml-1" type="text" name="email" value={student.email} onChange={handleChange} />
            <label>Major</label>
            <input className="mr-2 ml-1" type="text" name="major" value={student.major} onChange={handleChange} />
            <label>GPA</label>
            <input className="mr-2 ml-1" type="text" name="gpa" value={student.gpa} onChange={handleChange} />
            <label>Courses Taken</label>
            <select className="mr-2 ml-1" name="coursesTaken" value={student.coursesTaken} onChange={handleChange}>
                <option value="">Select a course</option>
                {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                ))}
            </select>
            <button className="btnSubmit" type="submit">Add Student</button>
        </form>
    )
}

export default StudentForm;