import React from 'react'
import Button from "./Button"

const Header = ({onshowAddtask, showadd}) => {
  return (
    <header className='header'>
    <h1>Task tracker
    </h1>
  { !showadd ?
    <Button  show color= 'yellow' onshowAddtask={onshowAddtask} showadd={showadd}  />
    : 
    <Button  show color= 'black' onshowAddtask={onshowAddtask} showadd={showadd}  />
  } 
    </header>
  )
}

export default Header