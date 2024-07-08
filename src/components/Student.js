import {Component} from "react";


export default class Student {
    constructor(id, firstName, lastName, email, major, gpa, coursesTaken) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.major = major;
        this.gpa = gpa;
        this.coursesTaken = coursesTaken; // Expecting an array of Course instances
    }

    // Method to return the student's full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Method to return the student's details
    getDetails() {
        return `
      ID: ${this.id}
      Name: ${this.getFullName()}
      Email: ${this.email}
      Major: ${this.major}
      GPA: ${this.gpa}
      Courses Taken: ${this.coursesTaken.map(course => course.name).join(', ')}
    `;
    }
}
