import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import StudentTable from './StudentTable';
import AddStudentForm from './AddStudentForm';
import EditStudentForm from './EditStudentForm';

export default function StudentDetail({students, courses, onAddStudent, onUpdateStudent, onDeleteStudent}) {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);

    const handleShowEdit = (student) => {
        setSelectedStudent(student);
        setShowEdit(true);
    };
    const handleCloseEdit = () => setShowEdit(false);

    return (<div className="student-detail col-12">
            <h2>Students</h2>
            <div className="d-flex justify-content-end mb-3">
                <Button variant="outline-primary" onClick={handleShowAdd}>Add Student</Button>
            </div>
            <StudentTable
                students={students}
                onDeleteStudent={onDeleteStudent}
                onEditClicked={handleShowEdit}
            />
            <AddStudentForm show={showAdd} handleClose={handleCloseAdd} onAddStudent={onAddStudent} courses={courses}/>
            <EditStudentForm show={showEdit} handleClose={handleCloseEdit} onUpdateStudent={onUpdateStudent}
                             student={selectedStudent} courses={courses}/>
        </div>);
}
