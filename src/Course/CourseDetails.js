import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();

  const [courseDtl, setCourseDtl] = useState([]);

  useEffect(() => {
    getCourse();
  }, [params.id]);

  const getCourse = async () => {
    const result = await axios.get(
      "http://localhost:8080/courses/" + params.id
    );
    console.log(result.data);

    setCourseDtl(result.data);
  };

  return (
    <div>
      CourseDetails
      {courseDtl.length > 0 && courseDtl.map((item) => <>{item.code}</>)}
    </div>
  );
};
export default CourseDetails;
