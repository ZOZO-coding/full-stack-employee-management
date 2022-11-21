import React from 'react'
import { useNavigate } from 'react-router-dom'

const Employee = ({ employee, deleteEmployee }) => {

    const navigate = useNavigate();

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }

    return (
        <tr>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.firstName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.lastName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.emailId}</div>
            </td>
            <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                <button
                    className='text-indigo-600 hover:text-indigo-800 px-4 cursor-pointer'
                    onClick={(e, id) => editEmployee(e, employee.id)}
                >
                    Edit
                </button>
                <button 
                    className='text-indigo-600 hover:text-indigo-800 cursor-pointer'
                    onClick={(e, id) => deleteEmployee(e, employee.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Employee