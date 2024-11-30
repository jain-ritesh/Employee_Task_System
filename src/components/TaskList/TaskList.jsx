import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FaildeTask from './FaildeTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto pt-4 gap-6 flex items-center mt-10 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200"
    >
      {data.tasks.map((e, idx) => {
        if (e.active) return <AcceptTask key={idx} data={e} />;
        if (e.newTask) return <NewTask key={idx} data={e} />;
        if (e.completed) return <CompleteTask key={idx} data={e} />;
        if (e.failed) return <FaildeTask key={idx} data={e} />;
      })}
    </div>
  );
};

export default TaskList;
