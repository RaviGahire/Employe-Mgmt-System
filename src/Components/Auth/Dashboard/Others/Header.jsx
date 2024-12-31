import React from 'react'

const Header = () => {
    return (
        <>

            <div className="flex items-end justify-between">
                <h1 className='text-2xl font-bold'>Hello <span className='font-semibold'>Ravi</span></h1>
                <button className='bg-[#393E46] py-2 px-4 rounded-small text-white hover:bg-[#00ADB5] transition-all duration-500 ' >Logout</button>
            </div>


        </>
    )
}

export default Header