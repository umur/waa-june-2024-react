export default function CourseTableRow({course, onDeleteClicked, onEditClicked}) {

    return <tr key={course.id}>
        <td>{course.id}</td>
        <td>{course.name}</td>
        <td>{course.code}</td>
        <td>
            <button className="btn btn-primary " onClick={()=>{
                console.log(onEditClicked);
                onEditClicked(course);
            }}>Edit</button>
            <button className="btn btn-danger m-1" onClick={() =>
            {
                console.log("Delete pressed")
                onDeleteClicked(course.id)
            }
            }>Delete</button>
        </td>
    </tr>;
}