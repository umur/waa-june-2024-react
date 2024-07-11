import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function PersonDetail(props) {
  const params = useParams();

  const [personDetailState, setPersonDetailState] = useState({});

  const getPersonDetail = async () => {
    const response = await axios.get(
      `http://localhost:8080/students/${params.id}`
    );
    setPersonDetailState(response.data);
  };

  useEffect(() => {
    getPersonDetail();
  }, [params.id]);

  return (
    <div>
      Person Detail
      {JSON.stringify(personDetailState)}
    </div>
  );
}
