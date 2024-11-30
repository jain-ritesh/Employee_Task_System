import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
 
  return (
    <div className='bg-[#1c1c1c] py-2 rounded mt-5 h-65'>
    <div className='bg-red-400 py-2 mb-2 px-4 flex rounded-sm justify-between'>
        <h2 className=' text-lg font-medium w-1/5 '>Employee Name</h2>
        <h3 className=' text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className=' text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className=' text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className=' text-lg font-medium w-1/5 '>Failed</h5>
    </div>
  <div className='overflow-auto'>
  {userData.map((elem, idx)=>{
        return<div key={idx} className='  py-2 border-2 border-emerald-600 mb-2 px-4 flex rounded-sm justify-between'>
        <h2 className=' text-lg font-medium w-1/5'>{elem.firstName}</h2>
        <h3 className=' text-lg font-medium w-1/5 text-pink-400'>{elem.taskCounter.newTask}</h3>
        <h5 className=' text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounter.active}</h5>
        <h5 className=' text-lg font-medium w-1/5 text-green-500'>{elem.taskCounter.completed}</h5>
        <h5 className=' text-lg font-medium w-1/5 text-red-600'>{elem.taskCounter.failed}</h5>
    </div>
        
    })}
  </div>
    
    </div>
  )
}

export default AllTask
