import React, { useState } from "react";
import axios from "axios";

function Student({ students,fetchStudents }) {
    const [newStudent, setNewStudent] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        major: "",
        gpa: ""
    });

    const [updateStudent, setUpdateStudent] = useState(false);

    const onChange = (event) => {
        const { name, value } = event.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    // const onChangeCourse = (event) => {
    //     const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    //     setNewStudent({ ...newStudent, coursesTaken: selectedOptions });
    // };

    const handleAddStudent = async () => {
            await axios.post("http://localhost:8080/students", newStudent);
            fetchStudents();
            setNewStudent({ id: "", firstName: "", lastName: "", email: "", major: "", gpa: ""});
    };

    const handleEditStudent = (student) => {
        setNewStudent({
            ...student,
            coursesTaken: (student.coursesTaken || []).map((course) => course.id), // Ensure coursesTaken is an array of IDs
        });
        setUpdateStudent(true);
    };

    const handleUpdateStudent = async () => {
            await axios.put(`http://localhost:8080/students/${newStudent.id}`, newStudent);
            fetchStudents();
            setNewStudent({ id: "", firstName: "", lastName: "", email: "", major: "", gpa: ""});
            setUpdateStudent(false);
    };

    const handleDeleteStudent = async (id) => {
            await axios.delete(`http://localhost:8080/students/${id}`);
            fetchStudents();
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Major</th>
                    <th>GPA</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {students && students.length > 0 ? (
                    students.map((student) => {
                        const { id, firstName, lastName, email, major, gpa} = student; // Default to empty array
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{major}</td>
                                <td>{gpa}</td>
                                <td>
                                    <button onClick={() => handleEditStudent(student)}>Edit</button>
                                    <button onClick={() => handleDeleteStudent(id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td colSpan="8">No students found.</td>
                    </tr>
                )}
                </tbody>
            </table>
            <h3>{updateStudent ? "Update Student" : "Add Student"}</h3>
            <input
                name="id"
                placeholder="Student Id"
                value={newStudent.id}
                onChange={onChange}
                disabled={updateStudent}
            />
            <input
                name="firstName"
                placeholder="First Name"
                value={newStudent.firstName}
                onChange={onChange}
            />
            <input
                name="lastName"
                placeholder="Last Name"
                value={newStudent.lastName}
                onChange={onChange}
            />
            <input
                name="email"
                placeholder="Email"
                value={newStudent.email}
                onChange={onChange}
            />
            <input
                name="major"
                placeholder="Major"
                value={newStudent.major}
                onChange={onChange}
            />
            <input
                name="gpa"
                placeholder="GPA"
                value={newStudent.gpa}
                onChange={onChange}
            />
            <button onClick={updateStudent ? handleUpdateStudent : handleAddStudent}>
                {updateStudent ? "Update" : "Add"}
            </button>
        </div>
    );
}

export default Student;
