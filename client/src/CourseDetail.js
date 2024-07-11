import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CourseDetail(props) {
  const params = useParams();

  const [courseDetailState, setCourseDetailState] = useState({});

  const getCourseDetail = async () => {
    const response = await axios.get(
      `http://localhost:8080/courses/${params.id}`
    );
    setCourseDetailState(response.data);
  };

  useEffect(() => {
    getCourseDetail();
  }, [params.id]);

  return (
    <div>
      Course Detail
      {JSON.stringify(courseDetailState)}
    </div>
  );
}
