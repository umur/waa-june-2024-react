import axios from "axios";
import { useEffect, useState } from "react";

export const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    const response = await axios.get("http://localhost:8080/employees");
    console.log(response.data);
    setEmployees(response.data);
  };

  return (
    <div>
      {employees.map((emp) => (
        <div>
          {emp.email}
          {emp.name}
        </div>
      ))}
    </div>
  );
};
