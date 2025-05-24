import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
    tasks: [],
    loading: false,
    error: null,
    status: 'All'
};
export const fetchTodo = createAsyncThunk('tasks/fetchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await response.json();
    return data.map(task => ({
        id: task.id,
        title: task.title,
        description: '',
        status: task.completed ? "Completed" : "To DO"
    }));
});
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        editTask:(state,action)=>{
            const {id,title,description,status}=action.payload;
            const task=state.tasks.find(task=>task.id===id);
            if(task){
                task.title=title;
                task.description=description;
                task.status=status;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});
export const { addTask,editTask,deleteTask } = taskSlice.actions;
export default taskSlice.reducer;