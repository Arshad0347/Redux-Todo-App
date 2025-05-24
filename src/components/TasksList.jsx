import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchTodo } from "../Features/taskSlice";
import "./TasksList.css";
import EditTask from "./EditTask";
import { deleteTask } from "../Features/taskSlice";

const TasksList = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const loading = useSelector(state => state.tasks.loading);
    const error = useSelector(state => state.tasks.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    if (error) {
        return <p className="error-message">There is an error loading tasks: {error}</p>;
    }

    if (loading) {
        return <p className="loading-message">Loading tasks...</p>;
    }

    return (
        <div className="tasks-container">
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div className="task-content">
                            <p>{task.title}</p>
                            <p>{task.description}</p>
                            <p>Status: {task.status}</p>
                        </div>
                        <div className="task-actions">
                            <EditTask key={task.id} task={task}></EditTask>
                            <button style={{ backgroundColor: "red", color: "white",height:"30px" }} onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksList;