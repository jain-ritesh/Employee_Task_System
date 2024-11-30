import React, {  useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashbord from './components/Dashbord/EmployeeDashbord';
import AdminDashbord from './components/Dashbord/AdminDashbord';
import { AuthContext } from './context/AuthProvider';



function App() {
 

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userDate, SetUserData] = useContext(AuthContext);


  useEffect(()=>{
    
      const loggedInUser = localStorage.getItem('loggedInUser');
      // console.log(Authdata)
      
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)

    
    }
  },[]);



  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
     localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))

    }else if(userDate){
      const employee = userDate.find((e)=> email == e.email && e.password == password );
     
     if(employee){
       setUser('employee');
       setloggedInUserData(employee);
      //  loggedInUserData(employee);
       localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
    }
    // else if( email == 'user@me.com' && password == '123'){

    // setUser('employees');
  
    // }
  }
    else{
      alert('Invalid Credentials');
  }
  }
  

  return (
    <>
    
     {!user ? <Login handleLogin={handleLogin} /> : ''}
     {user == 'admin' ? <AdminDashbord changeUser={setUser} />: (user == 'employee' ? <EmployeeDashbord changeUser={setUser} data = {loggedInUserData}/>: null)}
    </>
  )
}

export default App;

