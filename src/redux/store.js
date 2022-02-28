import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice"
import GalleryReducer from "./GallerySlice"

const store = configureStore({
    reducer:{
        tasks: taskReducer,
        gallery:GalleryReducer
    }
  })
  
  export default store;