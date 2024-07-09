import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details from a data source using the courseId
    // This is a placeholder for the actual data fetching logic
    const fetchCourseDetails = async () => {
      // Replace with actual data fetching logic
      const courseData = {
        id: courseId,
        name: 'Sample Course',
        code: 'CS101',
      };
      setCourse(courseData);
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