import React, { useState } from 'react'

const Header = () => {
// const [username, setUsername] = useState('')

// if(!data){
// setUsername('admin')


// }
// else{
//     setUsername(data.firstName)
// }

    // console.log(data.firstName)


const logOutUser = () =>{
localStorage.setItem('loggedInUser', '')
window.location.reload() // This method to reload the page automatically

}



    return (
        <>

            <div className="flex items-end justify-between">
                <h1 className='text-2xl font-bold'>Hello <span className='font-semibold'>username</span></h1>
                <button onClick={logOutUser} className='bg-[#393E46] py-2 px-4 rounded-small text-white hover:bg-[#00ADB5] transition-all duration-500 ' >Logout</button>
            </div>


        </>
    )
}

export default Header