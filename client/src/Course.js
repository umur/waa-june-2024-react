import { useNavigate } from "react-router-dom";

export default function Course(props) {
  const navigate = useNavigate();

  const onShowDetailButtonClicked = (id) => {
    navigate("/course-detail/" + id);
  };

  return (
    <div>
      Name: {props.name}
      Code: {props.code}
      Students: {props.students}
      <input
        type="button"
        value="Details"
        onClick={() => {
          onShowDetailButtonClicked(props.id);
        }}
      />
    </div>
  );
}
