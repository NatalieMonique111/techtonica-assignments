import React from 'react';
import './App.css';

function Task({ task, index, completeTask }) {
  return (
    <div
      className='task'
      style={{ textDecoration: task.isCompleted ? false : 'line-through' }}
    >
      {task.title}
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}

export default Task;