

export function StudentTableRow({props, student}) {

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
        </tr>
    </>;
}