import React from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbord = (props) => {
  return (
    <div className=' p-10 bg-[#1c1c1c] h-screen'>
    
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNo data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashbord
