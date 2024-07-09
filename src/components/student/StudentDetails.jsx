import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function StudentDetails() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/students');
  };

  useEffect(() => {
    // Fetch student details from API
    fetch(`http://yourapi/students/${studentId}`)
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.error('Error fetching student details:', error));
  }, [studentId]);

  const handleDelete = () => {
    // API call to delete student
    fetch(`http://yourapi/students/${studentId}`, { method: 'DELETE' })
      .then(() => {
        alert('Student deleted successfully');
        navigate('/add-student'); // Redirect to student list
      })
      .catch((error) => console.error('Error deleting student:', error));
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h2>{student.firstName} {student.lastName}</h2>
      <p>Major: {student.major}</p>
      <p>GPA: {student.gpa}</p>
      {/* Add link to edit page */}
      <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Delete</button>
      <button onClick={handleBack}>Back to Student List</button>
    </div>
  );
}

export default StudentDetails;