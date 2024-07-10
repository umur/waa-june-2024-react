import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StudentDetails() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/students/${studentId}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudentDetails();
  }, [studentId]);

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h2>{student.firstName} {student.lastName}</h2>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Major:</strong> {student.major}</p>
      <p><strong>GPA:</strong> {student.gpa}</p>
      <h3><strong>Courses Taken:</strong> </h3>
      <ul>
        {student.coursesTaken.map(course => (
          <li key={course.id}>{course.code} - {course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDetails;