import React, { useState } from "react";
import "./AddTasks.css";
import { useDispatch } from "react-redux";
import { addTask } from "../Features/taskSlice";
import { v4 as uuidv4 } from 'uuid';
const AddTasks = () => {

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [status,setStatus]=useState('To Do');
    const dispatch=useDispatch();
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const newTask={
            id:uuidv4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask));
        setTitle('');
        setDescription('');
        setStatus('To Do');
    }
  return (
    <form onSubmit={handleOnSubmit} className="add-task-form">
      <h2>Add New Task</h2>
      <div className="form-group">
        <input 
        value={title} onChange={(e) => setTitle(e.target.value)}
          type="text" 
          placeholder="Task Name" 
          required 
        />
      </div>
      <div className="form-group">
        <textarea 
        value={description} onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <select
        value={status} onChange={(e) => setStatus(e.target.value)}
         required>
          <option value="">Select Status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">Add Task</button>
    </form>
  );
};

export default AddTasks;