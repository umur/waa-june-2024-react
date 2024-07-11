import axios from "axios";
import { useState } from "react";

export default function CreateCourse() {
  const [courseState, setCourseState] = useState({
    name: "",
    code: "",
    students: [],
  });

  const onChange = (e) => {
    setCourseState({ ...courseState, [e.target.name]: e.target.value });
  };

  const onSaveButtonClicked = () => {
    axios.post("http://localhost:8080/courses", courseState);
  };

  return (
    <div>
      Name:
      <input
        type="text"
        value={courseState.name}
        onChange={onChange}
        name="name"
      />
      Code:
      <input
        type="text"
        value={courseState.code}
        onChange={onChange}
        name="code"
      />
      <input type="button" value="Save" onClick={onSaveButtonClicked} />
    </div>
  );
}
