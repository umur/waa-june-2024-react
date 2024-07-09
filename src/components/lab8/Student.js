import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentElement from "./StudentElement";

function Student () {
  const [students, setStudentsState] = useState([]);

  const getStudents = async () => {
    const resp = await axios.get("http://localhost:3000/students");
    if (resp.status === 200) {
      console.log(resp.data);
      setStudentsState(resp.data);
    }
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    students.map((student) => { return <StudentElement key={student.id} student={student} /> })
  );
}
export default Student;