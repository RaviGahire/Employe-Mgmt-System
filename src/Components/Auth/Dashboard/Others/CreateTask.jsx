import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#393E46] p-4 mt-4 rounded'>
    <form className='flex w-full flex-wrap  items-start justify-between ' >

        <div className=" w-1/2">
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make ur task ' />
        </div>
            <div className="">
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>
            <div className="">
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" />
            </div>
            <div className="">
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" />

            </div>
        </div>
        
        <div className="flex flex-col items-start w-1/2">
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            
            <textarea className='w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' name="" id=""></textarea>
            <button className='py-3 px-5 mt-4 rounded  text-sm w-full bg-[#00ADB5]'>Create Task</button>
        </div>

  
    </form>
</div>
  )
}

export default CreateTask