import React, {useState} from "react";

function AddCourseForm({onAddCourse}) {
    const [formData, setFormData] = useState({
        name: '',
        code: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate input
        if (!formData.name || !formData.code) {
            alert('Please provide both the course name and code.');
            return;
        }
        onAddCourse({
            name: formData.name,
            code: formData.code
        });
        setFormData({name: '', code: ''}); // Reset the form fields
    };

    return (<form onSubmit={handleSubmit}>
        <h3>Add New Course</h3>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Course Name"
            required
        />
        <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Course Code"
            required
        />
        <button type="submit">Add Course</button>
    </form>);
}

export default AddCourseForm;