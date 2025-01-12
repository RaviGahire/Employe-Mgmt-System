import React from 'react'

const CompeletTask = () => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#EEEEEE] rounded-xl">
            <div className="flex justify-between">
                <h3 className='bg-red-400 px-3 py-1 rounded'>High</h3>
                <h4 className='text-gray-700 '>20 feb 2024</h4>
            </div>
            <h3 className='text-gray-700 mt-5 font-semibold text-2xl'>Make anythin u like</h3>
            <p className='text-sm text-gray-700 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, rerum?</p>

            <div className="mt-2">
                <button className='w-full bg-green-500'>Completed</button>
            </div>

        </div>
    )
}

export default CompeletTask;