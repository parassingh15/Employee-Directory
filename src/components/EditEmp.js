import React, {useState} from 'react';
import axios from 'axios';
import { Modal } from 'bootstrap';

export default function EditEmp() {
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [domain, setDomain] = useState('')

    const postData = () => {
        axios.post('http://localhost:3000/employee',{id, firstName, lastName, domain})
            .then(console.log('data posted!'));
            
            
    }

    return (
        <>
        <Modal>
            <Modal.Title>Edit Employee</Modal.Title>
        <h1 className='heading mb-5 mt-5'>Add New Employee</h1>
        <Modal.Body>
        <form className='employeeForm col-sm-8'>

            <div className='row'>
                <div className="row mb-4">

                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">
                        First Name*
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="inputFirstName" required onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                
                    <label htmlFor="inputLastName" className="col-sm-2 col-form-label">
                        Last Name*
                    </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="inputLastName" required onChange={(e) => setLastName(e.target.value)}/>
                    </div>

                </div>
            </div>

            <div className="row mb-4">
                <label htmlFor="inputId" className="col-sm-2 col-form-label">
                    Employee ID*
                </label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" id="inputId" required onChange={(e) => setId(e.target.value)} minLength={7} maxLength={7}/>
                </div>
            </div>

            <div className="row mb-4">
                <label htmlFor="domain" className="col-sm-2 col-form-label">
                    Select Domain*
                </label>
                <div className="col-sm-4">
                    <select className="form-select" aria-label="Default select example" required onChange={(e) => setDomain(e.target.value)}>
                        <option defaultValue>Select your Domain</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Sales">Sales</option>
                        <option value="Legal">Legal</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Training">Training</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => postData()}>
                Edit Employee
            </button>
        </form>
        </Modal.Body>
        </Modal>
        </>
    );
}
