const courseList = [{ id: 1, courseName: "WAA", code: 545 }];

export default function CourseList() {
  const courses = courseList.map((course) => (
    <li key={course.id}>
      {course.courseName} - {course.code}
    </li>
  ));

  return <ol>{courses}</ol>;
}
