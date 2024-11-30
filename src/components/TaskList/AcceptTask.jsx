import React from 'react'

const AcceptTask = ({data}) => {

   

  console.log(data)
  const handleCompleted = ()=>{
  
  }
    return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-yellow-400 '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h2>{data.taskDate}</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
        {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
            <button onSubmit={handleCompleted} className='bg-pink-500 py-1 px-2 text-sm'>Mark As Completed</button>
            <button className='bg-blue-500 py-1 px-2 text-sm'>Mark As Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
