export const DEFAULT_COURSES = [
  { id: 1, name: "Introduction to Computer Science", code: "CS101" },
  { id: 2, name: "Data Structures and Algorithms", code: "CS201" },
  { id: 3, name: "Database Systems", code: "CS301" },
];

export const DEFAULT_STUDENTS = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    major: "Computer Science",
    gpa: 3.5,
    coursesTaken: [DEFAULT_COURSES[0], DEFAULT_COURSES[1]],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    major: "Software Engineering",
    gpa: 3.8,
    coursesTaken: [DEFAULT_COURSES[1], DEFAULT_COURSES[2]],
  },
];
