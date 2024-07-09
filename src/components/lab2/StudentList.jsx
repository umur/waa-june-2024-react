import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        try {
            const response = await axios.get('/students');
            setStudents(response.data);
        } catch (error) {
            console.error('getStudents: ', error);
        }
    };

    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.firstName} {student.lastName} - {student.email} - {student.major} - GPA: {student.gpa}
                        <ul>
                            {student.coursesTaken.map(course => (
                                <li key={course.id}>{course.name} ({course.code})</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
