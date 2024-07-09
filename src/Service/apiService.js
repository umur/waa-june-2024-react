// apiService.js
const BASE_API = "http://localhost:8080";

export const getCourseApi = async () => {
  const response = await fetch(BASE_API + "/courses", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const saveCourseApi = async (formdate) => {
  const response = await fetch(BASE_API + "/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdate),
  });
  const data = await response.json();
  return data;
};

export const updateCourseApi = async (formdate) => {
  const response = await fetch(BASE_API + "/courses/" + formdate.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdate),
  });
  const data = await response.json();
  return data;
};

export const deleteCourseApi = async (id) => {
  const response = await fetch(BASE_API + "/courses/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getAllCoursesApi = async () => {
  const response = await fetch(BASE_API + "/courses", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const saveStudentApi = async (formdate) => {
  const response = await fetch(BASE_API + "/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdate),
  });
  const data = await response.json();
  return data;
};

export const getAllStudentsAPi = async () => {
  const response = await fetch(BASE_API + "/students", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const deleteStudentApi = async (id) => {
  const response = await fetch(BASE_API + "/students/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
