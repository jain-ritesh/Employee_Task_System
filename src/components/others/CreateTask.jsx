import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskAssign, setTaskAssign] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setDescription] = useState('');
  const [newTask, setNewTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({ taskTitle, taskDate, category, taskDescription, active: false, newTask: true, completed: false, failed: false });
    const data = userData;

    data.forEach((elem) => {
      if (taskAssign === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounter.newTask += 1;
      }
    });

    setUserData(data);

    setTaskTitle('');
    setTaskDate('');
    setTaskAssign('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="p-6 bg-slate-700 mt-7 rounded-lg shadow-md border border-gray-200">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-wrap items-start justify-between gap-6"
      >
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-white mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Task Title"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-white mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-white mb-1">Assign To</h3>
            <input
              value={taskAssign}
              onChange={(e) => setTaskAssign(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-white mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/5">
          <div className="mb-4">
            <h3 className="text-sm text-white mb-1">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-40 px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Task description..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
