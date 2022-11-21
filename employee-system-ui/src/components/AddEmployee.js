import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const navigate = useNavigate();

    // create states for the data entered in the form
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    // handle change function
    const handleChange = (e) => {
        const value = e.target.value;
        // first spread the original state, then change the value whereever you have the change event.
        setEmployee({ ...employee, [e.target.name]: value })
    };

    // save the employee when click the save button
    const saveEmployee = (e) => {
        e.preventDefault();

        EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log(response)
                navigate("/employeeList")
            }).catch((error) => {
                console.log(error);
            })
    }

    // reset the employee fields to empty
    const resetEmployee = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        })
    }

    return (
        <div className='bg-white flex max-w-2xl mt-4 mx-auto shadow-xl border-b'>
            <div className='p-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Add New Employee</h1>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-slate-900 text-sm font-normal'>First Name</label>
                    <input
                        type="text"
                        name='firstName'
                        onChange={(e) => handleChange(e)}
                        value={employee.firstName}
                        required
                        placeholder='Please Enter...'
                        className='h-10 w-96 border mt-2 p-2'
                    />
                </div>

                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-slate-900 text-sm font-normal'>Last Name</label>
                    <input
                        type="text"
                        name='lastName'
                        onChange={(e) => handleChange(e)}
                        value={employee.lastName}
                        required
                        placeholder='Please Enter...'
                        className='h-10 w-96 border mt-2 p-2'
                    />
                </div>

                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-slate-900 text-sm font-normal'>Email</label>
                    <input
                        type="email"
                        name='emailId'
                        onChange={(e) => handleChange(e)}
                        value={employee.emailId}
                        required
                        placeholder='Please Enter...'
                        className='h-10 w-96 border mt-2 p-2'
                    />
                </div>

                <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4 text-right'>
                    <button
                        className='rounded text-white font-semibold bg-green-500 px-3 py-2 hover:bg-green-700'
                        onClick={saveEmployee}
                    >
                        Save
                    </button>
                    <button
                        className='rounded text-white font-semibold bg-red-500 px-3 py-2 hover:bg-red-700'
                        onClick={resetEmployee}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee