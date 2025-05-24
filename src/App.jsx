import React from 'react';
import './App.css'
import TasksList from './components/tasksList';
import AddTasks from './components/AddTasks';
function App() {


  return (
  
<div className='App'>
  <div>
    <h1 style={{textAlign:"center", color:"blue"}}>TODO Management App</h1>
    <AddTasks></AddTasks>
    <TasksList/>
  </div>
</div>
  )
}

export default App;
