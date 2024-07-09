import axios from "axios";

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: "http://localhost:3001/students",
});

// Function to handle GET requests
const getStudents = async (endpoint) => {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    console.error(`GET ${endpoint} failed:`, error);
    return [];
  }
};

const addStudent = async (student) => {
  try {
    const response = await api.post("", student);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const studentApi = {
  getStudents,
  addStudent,
};
