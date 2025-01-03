import React, { useEffect, useState } from "react";
import LoginPage from "./Components/Auth/LoginPage";
import EmployeDashboard from "./Components/Auth/Dashboard/EmployeDashboard";
import AdminDashboard from "./Components/Auth/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";



const App = () => {

const [user, setUser] = useState(null);

const handleLogin = (email,password)=>{
if (email == 'admin@example.com' && password == '123'){

  console.log('This is admin ')

}else if (email == 'user@example.com' && password == '123'){
  console.log('User login succesfully')
}
else{
  alert("Invalid user")
}
  
}


  return (
    <>
    {/* Here we did conditional rendering  and pass the handlelogin function to login component*/}
      {!user ? <LoginPage  handleLogin={handleLogin}/> : ''}


      {/* <EmployeDashboard/>
      <AdminDashboard/> */}
    </>
  )
}

export default App;

