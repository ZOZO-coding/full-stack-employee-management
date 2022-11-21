import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

    // when click on the "Add Employee" button, it will navigate the page to the Add Employee Component page
    const navigate = useNavigate();

    // useState to get the states: loading, and employees
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    // useEffct hook to load the fetched data
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // fetch the data
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.log(error);
            }
            // once finished fetching, set loading to false
            setLoading(false);
        };
        // call the fetchData function
        fetchData();
    }, []);

    return (
        <div className='container mx-auto my-8'>
            <div className='h-12'>
                <button
                    onClick={() => navigate("/addEmployee")}
                    className='rounded text-white font-semibold bg-stone-500 px-3 py-2 hover:bg-stone-700'
                >
                    Add Employee
                </button>
            </div>
            <div className='flex shadow-sm border-b'>
                <table className='min-w-full'>
                    <thead className='bg-slate-200'>
                        <tr>
                            <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>First Name</th>
                            <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>Last Name</th>
                            <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>Email Address</th>
                            <th className='text-right font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>Actions</th>
                        </tr>
                    </thead>
                    {/* loop through the list of employees and display the table body */}
                    {!loading && (
                        <tbody className='bg-white'>
                            {employees.map((employee) => (
                                <Employee employee={employee} key={employee.id} />
                            ))}
                        </tbody>
                    )}

                </table>
            </div>
        </div>
    )
}

export default EmployeeList