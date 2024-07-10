import React, {FormEvent, useEffect, useState} from "react";
import InputField from "./Field/InputField";
import axios, {AxiosResponse} from "axios";
import Constant from "../assets/Constant";
import MultiSelect from "./Field/MultiSelect";

export interface CourseDetail {
    id: number;
    name: string;
    code: string;
}

function Student() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        getCourses()
    }, []);

    const details: CourseDetail[] = []
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        major: '',
        gpa: 0.0,
        courseTaken: []
    });
    const getCourses = async () => {
        const resp: AxiosResponse<any, any> = await axios.get(Constant.courses);
        setCourses(resp.data);
    }
    const getCoursesTaken = (courseIds: []) => {
        return courseIds.map(courseId => {
            return courses.find(course => course.id === courseId);
        })
    }
    const addStudent = async () => {
        const response = await axios.post(
            Constant.students, {...student, courseTaken: getCourses()}
        )
        console.log('Add student response :', response.data);
    }
    const handleOnSubmit = (event: FormEvent) => {
        const {firstName, lastName, email, gpa, major, courseTaken} = student;
        {
            (firstName == '' || lastName == '' || email == '' || major == '' || courseTaken.length == 0)
            &&
            alert("Please fill in all the fields")
        }
        addStudent();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudent(student => (
            {
                ...student,
                [event.target.name]: event.target.value
            }
        ))
    }
    const onCoursesChanged = (newValue: React.ChangeEvent) => {
        setStudent(student => ({...student, coursesTaken: newValue}));
    }
    return (
        <div>
            <h5 className="text-center">Fill in the Student Details</h5>
            <form onSubmit={handleOnSubmit}>
                <InputField
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={student.firstName}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={student.lastName}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    label="Email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    label="Major"
                    name="major"
                    value={student.major}
                    onChange={handleChange}
                />
                <InputField
                    type="number"
                    label="GPA"
                    value={student.gpa}
                    name="gpa"
                    onChange={handleChange}
                />
                <MultiSelect
                    label="Courses"
                    data={courses.map(x => ({key: x.id, value: x.name + " (" + x.code + ")"}))}
                    selected={student.coursesTaken}
                    onChange={onCoursesChanged}
                />
                <button className="btn btn-primary"
                        type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default Student;