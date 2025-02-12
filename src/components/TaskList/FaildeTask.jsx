import React from 'react'

const FaildeTask = ({data}) => {
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
    <div className='mt-4'>
        <button className='bg-red-500 w-full py-1 px-2 text-sm'> Failed</button>
    </div>
  </div>
  )
}

export default FaildeTask
