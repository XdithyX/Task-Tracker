import React from 'react'
import Task from './Task'

function Tasks({tasks, onDelete, ontoggleremainder }) {
  return (
    <>
    {tasks.map((task)=>(
        <Task key={task.id} task={task} onDelete={onDelete} ontoggleremainder={ontoggleremainder}/>
    )

    )}
    </>
    
  )
}

export default Tasks