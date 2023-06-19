import React from 'react'

function Task(props) {
  return (

    
    <div className='task' style={{ backgroundColor: props.completed ? "green" : "white" }}>
        <h1>{props.taskName}</h1>
        <button onClick={ () =>  props.completeTask(props.id) }>Complete</button>
        <button onClick={ () => props.handleDelete(props.id) }>X</button>
    </div>
  )
}

export default Task