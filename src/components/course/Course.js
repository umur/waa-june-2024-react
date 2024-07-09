export default class Course {
    constructor(id, name, code) {
        this.id = id;
        this.name = name;
        this.code = code;
    }

    // Method to return course details as a string
    getDetails() {
        return `Course: ${this.name} (Code: ${this.code})`;
    }
}