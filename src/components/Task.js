import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({task, onDelete, ontoggleremainder}) {
  return (
    <div className={`task ${task.remainder ? 'reminder':'' }`}
     onDoubleClick={()=>{ontoggleremainder(task.id)}} >
    <h3>{task.text} 
    <FaTimes style={ { cursor:'pointer' } } onClick={()=>{onDelete(task.id)}} />
    </h3>
    <p> {task.day}
    </p>
    
    </div>
  )
}

export default Task