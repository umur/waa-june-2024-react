import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Course from './Course';
import axios from "axios";

export default function UpdateCourseForm({ show, handleClose, onUpdateCourse, course }) {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        if (course) {
            setName(course.name);
            setCode(course.code);
        }
    }, [course]);

    const callUpdateCourseAPI = async (newCourse ) =>{
        await axios.put(`/courses/${newCourse.id}`, newCourse);
        onUpdateCourse();
        handleCloseModal();
    };

    const handleUpdateCourse = (event) => {
        event.preventDefault();
        if (name && code) {
            const updatedCourse = new Course(course.id, name, code);
            callUpdateCourseAPI(updatedCourse);

        }
    };

    const resetForm = ()=>{
        setName('');
        setCode('');
    }

    const handleCloseModal = () => {
        handleClose();
        resetForm();
    };

    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleUpdateCourse}>
                    <Form.Group controlId="courseName">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="courseCode">
                        <Form.Label>Course Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter course code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Course
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
