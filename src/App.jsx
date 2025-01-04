import React, { useContext, useEffect, useState } from "react";
import LoginPage from "./Components/Auth/LoginPage";
import EmployeDashboard from "./Components/Auth/Dashboard/EmployeDashboard";
import AdminDashboard from "./Components/Auth/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";


const App = () => {

  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem('loggedInUser')
if(loggedInUser){
  setUser(loggedInUser.role)
}

    }


  }, [authData])



  const handleLogin = (email, password) => {

    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')

      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))



    }
    else if (authData && authData.employees.find((e) => email == e.email && password == e.password)) {
      setUser('employee')

      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
    }

    else {
      alert('invalid user')
    }
  }



  return (
    <>
      {!user ? <LoginPage handleLogin={handleLogin} /> : ''}

      {user == 'admin' ? <AdminDashboard /> : <EmployeDashboard />}
    </>
  )
}

export default App;

