import React from 'react'
import Header from "./components/Header";
import { useState } from 'react'
import Tasks from "./components/Tasks"
import Addtask from './components/Addtask';

function App() {
  const [showaddtask,setshowaddtask]=useState(false)
  const [tasks,setTasks]=useState([
    {
      id:1,
    text: 'hello',
    day: '24th may 12 pm',
    remainder: true
    },
    {
      id:2,
    text: 'hellolddd',
    day: '24th may 12 pm',
    remainder: false
    } ,
    {
      id:3,
    text: 'ddk',
    day: '24th may 12 pm',
    remainder: true
    }

  ])

  const onAdd = (task)=>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newtask={ id, ...task }
    setTasks([...tasks,newtask])

  }

  const deletetask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))


  }

const toggleRemainder=(id)=>{
  setTasks(tasks.map((task)=>
  task.id===id ? {...task, remainder: !task.remainder} : task
  ))
}


  return (
    <div className="Container">
    
     <Header onshowAddtask={()=>{
  setshowaddtask(!showaddtask) 
} 
} showadd={showaddtask}/>
     {showaddtask && <Addtask onadd={onAdd}/>}
     <Tasks tasks={tasks} onDelete={deletetask} ontoggleremainder={toggleRemainder}/>
    </div>
  );
}

export default App;
