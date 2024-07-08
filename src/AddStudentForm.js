import React, {useState} from "react";

function AddStudentForm({onAddStudent}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        major: '',
        gpa: ''
    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Basic validation can be added here
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.major || !formData.gpa) {
            alert('Please fill in all fields');
            return;
        }
        onAddStudent({
            ...formData,
            gpa: parseFloat(formData.gpa), // Convert GPA to a number
            coursesTaken: [] // Initialize with no courses
        });
        setFormData({firstName: '', lastName: '', email: '', major: '', gpa: ''}); // Reset form
    }
    return (
        <div>
            <h3>Add New Student</h3>
            <form onSubmit={handleSubmit}>
                <input name="firstName"
                       type="text"
                       value={formData.firstName}
                       onChange={handleChange}
                       placeholder="First Name"/>
                <input name="lastName"
                       type="text"
                       value={formData.lastName}
                       onChange={handleChange}
                       placeholder="Last Name"/>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    placeholder="Major"
                />
                <input
                    type="number"
                    name="gpa"
                    step="0.1"
                    value={formData.gpa}
                    onChange={handleChange}
                    placeholder="GPA"
                />
                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default AddStudentForm;