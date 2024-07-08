import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import Student from "../Student.js";


export default function AddStudentForm({ show, handleClose, onAddStudent, courses }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('');
    const [gpa, setGpa] = useState('');
    const [selectedCourses, setSelectedCourses] = useState([]);

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMajor('');
        setGpa('');
        setSelectedCourses([]);
    };

    const handleAddStudent = (event) => {
        event.preventDefault();
        if (firstName && lastName && email && major && gpa) {
            const studentCourses = courses.filter((course) => selectedCourses.includes(course.id));

            const newStudent = new Student(Date.now(), firstName, lastName, email, major, parseFloat(gpa), studentCourses);
            onAddStudent(newStudent);
            console.log(newStudent);
            handleClose();
            resetForm();
        }
    };

    const handleCloseModal = () => {
        handleClose();
        resetForm();
    };

    const courseOptions = courses.map(course => ({ value: course.id, label: course.name }));

    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddStudent}>
                    <Form.Group controlId="studentFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="studentLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="studentEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="studentMajor">
                        <Form.Label>Major</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter major"
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="studentGpa">
                        <Form.Label>GPA</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            min="0"
                            max="4.0"
                            placeholder="Enter GPA"
                            value={gpa}
                            onChange={(e) => setGpa(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="studentCourses">
                        <Form.Label>Courses</Form.Label>
                        <Select
                            isMulti
                            options={courseOptions}
                            onChange={(selectedOptions) => setSelectedCourses(selectedOptions.map(option => option.value))}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Student
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
