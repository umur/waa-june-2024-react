import React from 'react';

const CourseList = ({ courses, setSelectedCourse, onDelete }) => {
    return (
        <div>
            <h2>Courses</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Code</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>{course.code}</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-sm btn-secondary mr-2" onClick={() => setSelectedCourse(course)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(course.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;
