import React from 'react';

const TaskListNo = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-5 mt-10">
      {/* New Task */}
      <div className="rounded-xl w-full sm:w-[45%] lg:w-[22%] py-6 px-9 bg-red-500 text-white shadow-lg">
        <h2 className="text-3xl font-bold">{data.taskCounter.newTask}</h2>
        <h3 className="text-lg md:text-xl font-medium">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="rounded-xl w-full sm:w-[45%] lg:w-[22%] py-6 px-9 bg-yellow-500 text-white shadow-lg">
        <h2 className="text-3xl font-bold">{data.taskCounter.completed}</h2>
        <h3 className="text-lg md:text-xl font-medium">Completed Task</h3>
      </div>

      {/* Active Task */}
      <div className="rounded-xl w-full sm:w-[45%] lg:w-[22%] py-6 px-9 bg-blue-500 text-white shadow-lg">
        <h2 className="text-3xl font-bold">{data.taskCounter.active}</h2>
        <h3 className="text-lg md:text-xl font-medium">Active Task</h3>
      </div>

      {/* Failed Task */}
      <div className="rounded-xl w-full sm:w-[45%] lg:w-[22%] py-6 px-9 bg-green-500 text-white shadow-lg">
        <h2 className="text-3xl font-bold">{data.taskCounter.failed}</h2>
        <h3 className="text-lg md:text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNo;
