import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#00ADB5] rounded-xl">
    <div className="flex justify-between">
        <h3 className='bg-red-400 px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-gray-700 '>{data.taskDate}</h4>
    </div>
    <h3 className='text-gray-700 mt-5 font-semibold text-2xl'>{data.taskTitle}</h3>
    <p className='text-sm text-gray-700 mt-4'>{data.taskDescription}</p>


    <div className="mt-4 ">
<button className='bg-green-400 py-2 px-1'>Aceespt Task</button>

    </div>

</div>
  )
}

export default NewTask;