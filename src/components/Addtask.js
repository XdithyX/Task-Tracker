import React from 'react'
import { useState } from 'react'

const Addtask =
({onadd})=> {
    const [text,setText]= useState('')
    const [day,setDay]= useState('')
    const [reminder,setreminder]= useState(false)
const onsubmit=(e)=>{

    e.preventDefault()

    if(!text){
    alert('Enter a task' )
    return
    }

    onadd({text,day,reminder})

    setText('')
    setDay('')
    setreminder(false)


}

  return (
    <form className='add-form' onSubmit={onsubmit}>
     <div className='form-control'>
       <label>Task</label>
       <input type='text' placeholder='Add task' value={text} onChange={(e)=>setText(e.target.value)}  ></input>
     </div>
     <div className='form-control '>
       <label>Date and time</label>
       <input type='text' placeholder='Add Day and time' value={day} onChange={(e)=>setDay(e.target.value)}></input>
     </div>
     <div className='form-control form-control-check' >
       <label>Remider</label>
       <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setreminder(e.currentTarget.checked)}></input>
     </div>
     <input className='btn btn-block' type='submit' value = 'save'></input>
    </form>
  )
}

export default Addtask
