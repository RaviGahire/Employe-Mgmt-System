import React from 'react'

const CompeletTask = ({data}) => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#EEEEEE] rounded-xl">
            <div className="flex justify-between">
                <h3 className='bg-red-400 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-gray-700 '>{data.taskDate}</h4>
            </div>
            <h3 className='text-gray-700 mt-5 font-semibold text-2xl'>{data.taskDate}</h3>
            <p className='text-sm text-gray-700 mt-4'>{data.taskDescription}</p>

            <div className="mt-2">
                <button className='w-full bg-green-500'>Completed</button>
            </div>

        </div>
    )
}

export default CompeletTask;