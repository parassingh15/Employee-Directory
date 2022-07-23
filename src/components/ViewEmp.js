import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewEmp.css";
import EditEmp from "./EditEmp";
import { Link, useNavigate } from "react-router-dom";

export default function ViewEmp() {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/employee")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const confirmDelete = (id) => {
    if (window.confirm(`Are you sure you want to DELETE this user?`) === true) {
      deleteData(id);
    }
  };

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/employee/${id}`)
      .then(console.log("deleted item"));
    let newData = [...data].filter((data) => data.id !== id);
    setData(newData);
  };

  const editData = (id) => {
    <EditEmp />;
  };

  return (
    <>
      <h2 className="head mb-5">Employee List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Domain</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row"> {item.id} </th>
              <td>
                <Link to={`/detail/${item.id}`}>{item.firstName}</Link>
              </td>
              <td>{item.lastName}</td>
              <td>{item.domain}</td>
              <td>
                <button
                  className="btnDel"
                  onClick={() => confirmDelete(item.id)}
                >
                  Delete
                </button>
                <button className="btnEdit" onClick={() => editData(item.id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
