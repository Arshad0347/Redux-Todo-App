import React from "react";
import "./EditTasks.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editTask } from "../Features/taskSlice";
const EditTask = ({task}) => {
    const [title,setTitle]=useState(task.title);
    const [description,setDescription]=useState(task.description);
    const [status,setStatus]=useState(task.status);
    const dispatch=useDispatch();

 const handleEdit = () => {
     dispatch(editTask({id:task.id,title,description,status}));
     setIsEdit(false);
 }
    const [isEdit, setIsEdit] = useState(false);
  return<div className="edit-task-container">
    {isEdit ? (
        <div>
            <h2>Edit Task</h2>
            <div className="form-group">
                <input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" 
                    placeholder="Task Name" 
                    required 
                />
            </div>
            <div className="form-group">
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description"
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <select
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    <option value="">Select Status</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="button-group">
                <button type="submit" className="submit-btn" onClick={handleEdit}>Save</button>
                <button onClick={() => setIsEdit(false)}>Cancel</button>
            </div>
        </div>
    ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
    )}
</div>
}
export default EditTask;
