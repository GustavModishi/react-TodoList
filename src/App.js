import { useState } from 'react';
import './App.css';
import Task from './Task';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
  
    setTodoList([...todoList, task]);
  };

  const handleDelete = (id) => {
    
    const newTodoList = todoList.filter((task) => task.id !== id);

    setTodoList(newTodoList);

  };

  const completeTask = (id) => {
    setTodoList ( 
      
      todoList.map((task) => {
      if (task.id === id) {
        return {...task, completed: true};

    }  
    return task;
    
  })
    );
  };


  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task 
          taskName={task.taskName} 
          id={task.id}  
          handleDelete={handleDelete} 
          completed={task.completed}
          completeTask = {completeTask} />;
          
         
          
        })}
       
      </div>
    </div>
  );
}

export default App;
