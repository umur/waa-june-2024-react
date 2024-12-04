import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    major: '',
    gpa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({
      fname: '',
      lname: '',
      email: '',
      major: '',
      gpa: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fname"
        placeholder="First Name"
        value={formData.fname}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        value={formData.lname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="major"
        placeholder="Major"
        value={formData.major}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="gpa"
        placeholder="GPA"
        step="0.1"
        value={formData.gpa}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
