import React, { useContext, useEffect, useState } from "react";
import LoginPage from "./Components/Auth/LoginPage";
import EmployeDashboard from "./Components/Auth/Dashboard/EmployeDashboard";
import AdminDashboard from "./Components/Auth/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  console.log(authData )

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem('loggedInUser')
      console.log(loggedInUser)
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)
      }
    }
  },[]) 



  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
      }
    }
    else {
      alert('invalid user')
    }
  }



  return (
    <>
      {!user ? <LoginPage handleLogin={handleLogin} /> : ''}

      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App;

