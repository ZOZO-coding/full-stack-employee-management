import React from 'react'

const AddEmployee = () => {
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
                        required
                        placeholder='Please Enter...'
                        className='h-10 w-96 border mt-2 p-2'
                    />
                </div>

                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-slate-900 text-sm font-normal'>Last Name</label>
                    <input
                        type="text"
                        required
                        placeholder='Please Enter...'
                        className='h-10 w-96 border mt-2 p-2'
                    />
                </div>

                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-slate-900 text-sm font-normal'>Email</label>
                    <input
                        type="email"
                        required
                        placeholder='Please Enter...'
                        className='h-10 w-96 border mt-2 p-2'
                    />
                </div>

                <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4 text-right'>
                    <button className='rounded text-white font-semibold bg-green-500 px-3 py-2 hover:bg-green-700'>Save</button>
                    <button className='rounded text-white font-semibold bg-red-500 px-3 py-2 hover:bg-red-700'>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee