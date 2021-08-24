
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Task from './Todo';
// Todo.js

function App() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: 'Walk the dog',
      isCompleted: true,
    },
    {
      title: 'Feed the cat',
      isCompleted: true,
    },
    {
      title: 'Hangout with friends',
      isCompleted: true,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter(task => !task.isCompleted).length)
  }, [tasks]);

  const completeTask = (index) => {
    const newTasks = [...tasks];

    if (newTasks[index].isCompleted) {
      newTasks[index].isCompleted = false;
    } else {
      newTasks[index].isCompleted = true;
    }
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='todo-container'>
      <div className='header'>TODO - ITEMS ({tasksRemaining})</div>
      <div className='tasks'>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>

    </div>
  );
}
export default App;