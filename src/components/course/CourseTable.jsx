import CourseTableRow from "./CourseTableRow.jsx";

export default function CourseTable({courses, onEditClicked, onDeleteClicked}) {
    console.log(onEditClicked)

    return <>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Code</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {courses.map(course => (<CourseTableRow course={course} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked}/>))}
            </tbody>

        </table>
    </>;
}