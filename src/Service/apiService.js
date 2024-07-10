import axios from "axios";

// apiService.js
// const BASE_API = "http://localhost:8080";

axios.defaults.baseURL = "http://localhost:8080";

export const getAllCoursesApi = async () => {
  const response = await axios.get("/courses");
  console.log(response.data);
  return response.data;
};

export const saveCourseApi = async (formdate) => {
  const response = await axios.post("/courses", formdate);
  return response.data;
};

export const updateCourseApi = async (formdate) => {
  const response = await axios.put("/courses/" + formdate.id, formdate);
  return response.data;
};

export const deleteCourseApi = async (id) => {
  const response = await axios.delete("/courses/" + id);
  return response.data;
};

export const saveStudentApi = async (formdate) => {
  const response = await axios.post("/students", formdate);
  return response.data;
};

export const getAllStudentsAPi = async () => {
  const response = await axios.get("/students");
  console.log(response.data);
  return response.data;
};

export const deleteStudentApi = async (id) => {
  const response = await axios.delete("/students/" + id);
  return response.data;
};
