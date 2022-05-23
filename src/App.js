import React from 'react'
import Header from "./components/Header";
import { useState } from 'react'
import Tasks from "./components/Tasks"
function App() {
  const [tasks,setTasks]=useState([
    {
      id:1,
    text: 'hello'
    },
    {
      id:2,
    text: 'hellolddd'
    } ,
    {
      id:3,
    text: 'ddk'
    }

  ])
  return (
    <div className="Container">
    
     <Header/>
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
