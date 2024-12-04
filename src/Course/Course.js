import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  getAllCoursesApi,
  saveCourseApi,
  updateCourseApi,
} from "../Service/apiService";
import CourseList from "./CourseList";
import { useNavigate } from "react-router-dom";
import { initialCourseForm as initialForm } from "../types/types";
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import CourseModal from "./CourseModal";

const Course = () => {
  const [courseForm, setCourseForm] = useState(initialForm);
  const [coursesList, setCoursesList] = useState([]);
  const [error, setError] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const modalRef = useRef(null);
  const inputCode = useRef(null);
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, [refresh]);

  const fetchCourses = useCallback(async () => {
    try {
      const data = await getAllCoursesApi();
      setCoursesList(data);
    } catch (error) {
      setError("Error fetching courses");
      console.error("Error fetching courses:", error);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCourseForm((prevCourseForm) => ({
      ...prevCourseForm,
      [name]: value,
    }));
  };

  const handleCourseSave = async (event) => {
    event.preventDefault();
    try {
      const data = await saveCourseApi(courseForm);
      setRefresh(!refresh);

      if (modalRef.current) {
        const modalElement = modalRef.current;
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) {
          backdrop.remove();
          modalInstance.hide();
        }
      }
      resetForm();
    } catch (error) {
      setError("Error saving course");
      console.error("Error saving course:", error);
    }
  };

  const resetForm = () => {
    setCourseForm(initialForm);
    setError(null);
  };

  const openModal = (editMode = false) => {
    setEditMode(editMode);
    if (modalRef.current) {
      const modalElement = modalRef.current;
      const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
      bootstrapModal.show();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      const modalElement = modalRef.current;
      const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  };

  return (
    <div className="container">
      {error && <div className="alert alert-danger mt-2">{error}</div>}

        <button
          type="button"
          className="btn btn-primary mt-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => openModal()}
        >
          Add Course
        </button>

        <CourseModal courseForm={courseForm}
          handleCourseSave={handleCourseSave}
          handleChange={handleChange}
          modalRef={modalRef}
          editMode={editMode}
        />

        <CourseList
          coursesList={coursesList}
          setEditMode={setEditMode}
          setCourseForm={setCourseForm}
          setCoursesList={setCoursesList}
          openModal={openModal}
          closeModal={closeModal}
        />
    </div>
  );
};

export default Course;
