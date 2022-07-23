import "./App.css";
import Navbar from "./components/Navbar";
import AddEmp from "./components/AddEmp";
import ViewEmp from "./components/ViewEmp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditEmp from "./components/EditEmp";
import Emp_Detail from "./components/Emp_Detail/Emp_Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ViewEmp />} />
          <Route path="/add" element={<AddEmp />} />
          <Route path="/modal" element={<EditEmp />} />
          <Route path="/detail/:id" element={<Emp_Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
