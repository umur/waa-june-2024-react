import CourseTable from "./CourseTable.jsx";
import AddCourseForm from "./AddCourseForm.jsx";
import {Button} from "react-bootstrap";
import {useState} from "react";
import UpdateCourseForm from "./UpdateCourseForm.jsx";

export default function CourseDetail({courses, onAddCourse, onRemoveCourse, onUpdateCourse}) {
    const onAddPressed = () => {
        const name = prompt("Enter course name:");
        const code = prompt("Enter course code:");
        if (name && code) {
            const newCourse = new Course(courses.length + 1, name, code);
            onAddCourse(newCourse);
        }
    };

    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [selectedCourse, setSelectedCourse] = useState(null);
    const handleShowUpdate = (course) => {
        setSelectedCourse(course);
        setShowUpdate(true);
    };
    const handleCloseUpdate = () => setShowUpdate(false);

    return (
        <div className="col-12">
            <h2>Courses</h2>
            <div className="d-flex justify-content-start mb-3">
                <Button variant="outline-primary" onClick={handleShow}>Add Course</Button>
            </div>
            <CourseTable
                courses={courses}
                onDeleteClicked={onRemoveCourse}
                onEditClicked={handleShowUpdate}
            />
            <AddCourseForm show={show} handleClose={handleClose} onAddCourse={onAddCourse} />
            <UpdateCourseForm
                show={showUpdate}
                handleClose={handleCloseUpdate}
                onUpdateCourse={onUpdateCourse}
                course={selectedCourse}
            />
        </div>
    );
}