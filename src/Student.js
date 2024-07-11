import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export function Student(props) {

    const navigate = useNavigate();

    const goToCourseDetail = () => {
        navigate(`/coursedetail/${props.id}`);
    };

    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Major</th>
                    <th>GPA</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.fname}</td>
                    <td>{props.lname}</td>
                    <td>{props.email}</td>
                    <td>{props.major}</td>
                    <td>{props.gpa}</td>
                    <td><button onClick={goToCourseDetail}>Show Courses</button></td>
                </tr>
            </tbody>
        </table>
        </div>


    );
}