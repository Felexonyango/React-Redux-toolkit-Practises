import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice =createSlice({
name:"Task",
initialState:[],
reducers:{
    //add task
addTask:(state,action)=>{
    const newTask={
        id: new Date(),
        name: action.payload.task
    }
    state.push(newTask);
},
//delete task 
deleteTask: (state, action)=>{
    return state.filter((item) => item.id !== action.payload.id);
}
}

})
export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;