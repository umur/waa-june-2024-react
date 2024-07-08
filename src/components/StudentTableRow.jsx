

export function StudentTableRow({props, student, onEditClicked, onDeleteClicked}) {

    return <>
        <tr>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <td>{student.major}</td>
            <td>{student.gpa}</td>
            <td>
                <ul>
                    {student.coursesTaken.map(course => (
                        <li>{course.name} ({course.code})</li>
                    ))}
                </ul>
            </td>
            <td>
                <button className="btn btn-primary " onClick={() => {
                    console.log(onEditClicked);
                    onEditClicked(student);
                }}>Edit
                </button>
                <button className="btn btn-danger m-1" onClick={() => {
                    onDeleteClicked(student.id)
                }
                }>Delete
                </button>
            </td>
        </tr>
    </>;
}