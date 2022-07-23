import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Emp_Detail.css";
import axios from "axios";

export default function Emp_Detail() {
  let { id } = useParams();
  const [emp_data, setEmp_data] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employee/${id}`)
      .then((response) => {
        console.log(response.data);
        setEmp_data(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Emp_Detail">
      <div className="EmpDetailDiv">
        <center>
          <h1>{emp_data.id}</h1>
          <h1>{emp_data.firstName}</h1>
          <h1>{emp_data.lastName}</h1>
          <h1>{emp_data.domain}</h1>
        </center>
      </div>
    </div>
  );
}
