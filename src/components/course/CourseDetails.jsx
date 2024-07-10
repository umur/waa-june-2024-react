import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/courses/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Course Details</h2>
      <div>
        <strong>ID:</strong> {course.id}
      </div>
      <div>
        <strong>Name:</strong> {course.name}
      </div>
      <div>
        <strong>Code:</strong> {course.code}
      </div>
    </div>
  );
}

export default CourseDetails;