import {useState} from "react";
import {StudentTableRow} from "../StudentTableRow.jsx";
import StudentTable from "./StudentTable.jsx";


export default function StudentDetail(props) {
   const {students, onAddStudent, onUpdateStudent, onDeleteStudent} = props;

    return <div className="student-detail col-12">
        <h2>Students</h2>
        <StudentTable students={students} />

    </div>;


}