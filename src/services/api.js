import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getStudents = () => axios.get(`${API_URL}/students`);
export const getStudentById = (id) => axios.get(`${API_URL}/students/${id}`);
export const createStudent = (student) => axios.post(`${API_URL}/students`, student);
export const updateStudent = (id, student) => axios.put(`${API_URL}/students/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/students/${id}`);
export const getStudentsByMajor = (major) => axios.get(`${API_URL}/students/major/${major}`);

export const getCourses = () => axios.get(`${API_URL}/courses`);
export const getCourseById = (id) => axios.get(`${API_URL}/courses/${id}`);
export const createCourse = (course) => axios.post(`${API_URL}/courses`, course);
export const updateCourse = (id, course) => axios.put(`${API_URL}/courses/${id}`, course);
export const deleteCourse = (id) => axios.delete(`${API_URL}/courses/${id}`);
export const getCoursesByStudentId = (studentId) => axios.get(`${API_URL}/students/${studentId}/courses`);
