import React, { useState, useEffect } from 'react';

const StudentForm = ({ selectedStudent, onSave }) => {
    const [student, setStudent] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        major: '',
        gpa: '',
        coursesTaken: [],
    });

    useEffect(() => {
        if (selectedStudent) {
            setStudent(selectedStudent);
        } else {
            setStudent({
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                major: '',
                gpa: '',
                coursesTaken: [],
            });
        }
    }, [selectedStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(student);
        setStudent({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            major: '',
            gpa: '',
            coursesTaken: [],
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={student.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={student.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="major">Major</label>
                <input
                    type="text"
                    className="form-control"
                    name="major"
                    value={student.major}
                    onChange={handleChange}
                    placeholder="Major"
                />
            </div>
            <div className="form-group">
                <label htmlFor="gpa">GPA</label>
                <input
                    type="number"
                    className="form-control"
                    name="gpa"
                    value={student.gpa}
                    onChange={handleChange}
                    placeholder="GPA"
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

export default StudentForm;
