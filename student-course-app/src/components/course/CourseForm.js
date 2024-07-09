import React, { useState, useEffect } from 'react';

const CourseForm = ({ selectedCourse, onSave }) => {
    const [course, setCourse] = useState({ id: '', name: '', code: '' });

    useEffect(() => {
        if (selectedCourse) {
            setCourse(selectedCourse);
        } else {
            setCourse({ id: '', name: '', code: '' });
        }
    }, [selectedCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(course);
        setCourse({ id: '', name: '', code: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                <label htmlFor="name">Course Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={course.name}
                    onChange={handleChange}
                    placeholder="Course Name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="code">Course Code</label>
                <input
                    type="text"
                    className="form-control"
                    name="code"
                    value={course.code}
                    onChange={handleChange}
                    placeholder="Course Code"
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

export default CourseForm;
