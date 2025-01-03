import React, { useState } from "react";

//Here we pass the handleLogin login fuction from App componet 
const LoginPage = (handleLogin) => {

    //Tow way binding for form 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    //we create this function for prevent form default behaver passing Synthetic Event(e) 
    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)

        //for clear the input field
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <div className=" flex items-center justify-center h-screen w-screen">

                <div className="border-2 border-emerald-600 p-20 rounded-xl">

                    <form onSubmit={(e) => {
                        submithandler(e)
                    }} className="flex flex-col items-center  justify-center" >
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required className="border-2 border-emerald-600 rounded-full py-2 px-5  text-xl text-dark outline-none bg-transparent placeholder:text-gray-400 mt-1" type="email" placeholder="Enter Email" />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required className="border-2 border-emerald-600 rounded-full  py-2 px-5 text-xl text-dark outline-none bg-transparent  placeholder:text-gray-400 mt-4 mb-1" type="password" placeholder="Enetr Password" />
                        <button className="  rounded-full py-2 px-20 text-dark outline-none bg-emerald-600 mt-4 text-xl" >Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;