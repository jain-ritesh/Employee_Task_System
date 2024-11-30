import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


function CreateTask() {

    const [userData, setUserData] = useContext(AuthContext);
    // useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAssign, setTaskAssign] = useState('')
    const [category, setCategory] = useState('')
    const [taskDescription, setDescription] = useState('')

    const [newTask , setNewTask] = useState({})

    const handleSubmit=(e)=>{
        e.preventDefault();
        setNewTask({taskTitle,taskDate,category,taskDescription,active:false, newTask:true, completed:false, failed:false})
        // const data = JSON.parse(localStorage.getItem('employees'))
         const data = userData

        data.forEach((elem) => {
            if(taskAssign == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCounter.newTask = elem.taskCounter.newTask+1
                console.log("This is new Json data : "+newTask)
            }
        });
        setUserData(data)
      
        // localStorage.setItem('employees',JSON.stringify(data))
        setTaskTitle('')
        setTaskDate('')
        setTaskAssign('')
        setCategory('')
        setDescription('')
 }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
       <form onSubmit={((e)=>{
        handleSubmit(e);
       })} 
       
       className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }}
                className='text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type='text' placeholder='Task Title'/>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                 value={taskDate}
                onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}
                 className='text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type='date' placeholder='Employee name'/>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                <input
                  value={taskAssign}
                onChange={(e)=>{
                    setTaskAssign(e.target.value)
                }}
                 className='text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type='text' placeholder='Employee name'/>
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                 value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
                className='text-sm px-2 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type='text' placeholder='design, dev, etc'/>
            </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'> Description</h3>
            <textarea 
            value={taskDescription}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id=''></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
       </form>

      </div>
  )
}

export default CreateTask
