import React, {useState} from "react";


export default function Course(course){
    const [cid,setCourseId]=useState(0);
    const btnViewClick=(evt)=>{
        setCourseId(100+cid);
        console.log(cid);
    }


    return (
        <tr>
            <td>{course.id}</td>
            <td>{course.courseName}</td>
            <td>Credit: {course.credit}</td>
            <td>Course Code: {course.courseCode}</td>
            <td>
                <input type="text" value={cid}  />
                <input type="button" value="Click Me!"
                onClick={btnViewClick} />
            </td>
        </tr>
    );
}

// export default function Course(propsList){
//     return (
//        <div>
//            {
//                propsList.map((item)=>{
//                    return <div>{item.id} {item.courseName}</div>
//                })
//            }
//        </div>
//     );
// }