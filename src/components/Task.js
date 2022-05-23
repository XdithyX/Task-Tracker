import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({task}) {
  return (
    <div className='task'><h3>{task.text} 
    <FaTimes/>
    </h3></div>
  )
}

export default Task