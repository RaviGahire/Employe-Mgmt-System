import React from 'react'

// here is we pass the auth context children is task context and task context children is App 
const AuthContext = ({ children }) => {
    return (
        <div>
            {children}


        </div>
    )
}

export default AuthContext;
