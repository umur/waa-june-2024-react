import {useState, MouseEvent, FormEvent} from "react";
import Constant from "../assets/Constant";
import axios from "axios";
import InputField from "./Field/InputField";



function Course() {
    const [course, setCourse]
        = useState({name: '', code: ''})

    const addCourse = async () => {
        const resp = await axios.post(Constant.courses, course);
        if (resp.status == 200) {
            setCourse({name: '', code: ''});
            alert("Save Success");
        }
        console.log("Creation response is:", resp.data);
    }

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        {
            (course.code == '' || course.name == '') && alert("Please fill in all the fields")
        }
        addCourse();
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCourse(course => (
            {
                ...course,
                [event.target.name]: event.target.value
            }
        ))
    }

    return (
        <div className="container">
            <div className="form-group">
                <h5 className="text-center">Fill in the Course Details</h5>
                <form onSubmit={handleOnSubmit}>
                    <InputField
                        type="text"
                        label="Name"
                        name="name"
                        value={course.name}
                        onChange={handleOnChange}
                    />
                    <InputField
                        type="text"
                        label="Code"
                        name="code"
                        value={course.code}
                        onChange={handleOnChange}></InputField>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Course;