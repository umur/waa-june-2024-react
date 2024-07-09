import React from 'react';

const StudentList = ({ students, setSelectedStudent, onDelete }) => {
    return (
        <div>
            <h2>Students</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Major</th>
                        <th scope="col">GPA</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.major}</td>
                            <td>{student.gpa}</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-sm btn-secondary mr-2" onClick={() => setSelectedStudent(student)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(student.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
