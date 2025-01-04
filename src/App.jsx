import React, { useEffect, useState } from "react";
import LoginPage from "./Components/Auth/LoginPage";
import EmployeDashboard from "./Components/Auth/Dashboard/EmployeDashboard";
import AdminDashboard from "./Components/Auth/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";


const App = () => {
 
const [user, setUser] = useState(null)

 const handleLogin = (email,password)=>{

if(email == 'admin@me.com' && password == '123'){
setUser('admin')

} 
else if(email == 'user@me.com' && password == '123'){
 setUser('employee')
}

else {
  alert('invalid user')
}




 }

 

  return (
    <>
 {!user ?  <LoginPage handleLogin= {handleLogin} /> : ''}

{user == 'admin' ? <AdminDashboard/> : <EmployeDashboard/>}
    </>
  )
}

export default App;

