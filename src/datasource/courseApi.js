import axios from "axios";

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: "http://localhost:3001/courses",
});

// Function to handle GET requests
const getCourses = async (endpoint) => {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    console.error(`GET ${endpoint} failed:`, error);
    return [];
  }
};

const addCourse = async (course) => {
  try {
    const response = await api.post("", course);
    return response.data;
  } catch (error) {
    return null;
  }
};

const deleteCourseById = async (courseId) => {
  try {
    const response = await api.delete(`/${courseId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null;
  }
};
export const courseApi = {
  getCourses,
  addCourse,
  deleteCourseById,
};
