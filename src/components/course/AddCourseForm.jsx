import React, {useCallback, useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Course from './Course';
import axios from "axios";

export default function AddCourseForm({ show, handleClose, onAddCourse }) {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    const callAddCourseAPI = async (newCourse ) =>{
      await axios.post('/courses', newCourse);
        onAddCourse();
        handleCloseModal();
    };

    const resetForm = ()=>{
        setName('');
        setCode('');
    }

    const handleCloseModal = () => {
        handleClose();
        resetForm();
    };

    const handleAddCourse = (event) => {
        event.preventDefault();
        if (name && code) {
            const newCourse = new Course(Math.floor(Date.now()/1000), name, code);

            callAddCourseAPI(newCourse);

        }
    };

    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddCourse}>
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
                        Add Course
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
