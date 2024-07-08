import {StudentTableRow} from "../StudentTableRow.jsx";

export default function StudentTable({props, students}) {

    return (<>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Major</th>
                <th>GPA</th>
                <th>Courses Taken</th>
            </tr>
            </thead>
            <tbody>
                {students.map(student => <StudentTableRow student={student}/>)}
            </tbody>
        </table>

    </>);
}