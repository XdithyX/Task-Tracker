import React from 'react'

function Button({color , onshowAddtask,showadd}) {
  return (
    <div>
    { !showadd?
      <button style={{backgroundColor :color}} className='btn' onClick={()=>{onshowAddtask()}}  >ADD</button>
    :<button style={{backgroundColor :color}} className='btn' onClick={()=>{onshowAddtask()}}  >CLOSE</button>
    }
    </div>
      )
}

export default Button