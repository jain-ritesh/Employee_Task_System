import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashbord = (props) => {
const data = useContext(AuthContext)
  return (
    <div className='h-screen w-full p-10'>

  
      <Header data = {data} changeUser={props.changeUser}/>

      <CreateTask/>
      <AllTask  />
    </div>
  )
}

export default AdminDashbord
