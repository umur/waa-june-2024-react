import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialStudents = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'student1@example.com',
        major: 'Computer Science',
        gpa: 3.8
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'student2@example.com',
        major: 'Computer Science',
        gpa: 3.6
    },
    {
        id: 3,
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'student3@example.com',
        major: 'Computer Science',
        gpa: 3.9
    },
    {
        id: 4,
        firstName: 'Bob',
        lastName: 'Brown',
        email: 'student4@example.com',
        major: 'Computer Science',
        gpa: 3.7
    },
    {
        id: 5,
        firstName: 'Alex',
        lastName: 'Steven',
        email: 'student5@example.com',
        major: 'Computer Science',
        gpa: 4.0
    }
];

const StudentList = () => {
    const [students, setStudents] = useState(initialStudents);

    const handleDelete = (id) => {
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents);
    };

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold leading-tight">Student List</h2>
                    <Link to="/students/add-student" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Add Student
                    </Link>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        First name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        Last name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        Major
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        GPA
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{student.id}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{student.firstName}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{student.lastName}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{student.email}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{student.major}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{student.gpa}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <Link to={`/students/${student.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                View
                                            </Link>
                                            <Link to={`/students/edit/${student.id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(student.id)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentList;