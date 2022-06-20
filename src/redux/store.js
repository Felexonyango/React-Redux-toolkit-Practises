import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice"
import GalleryReducer from "./GallerySlice"
import { userApi } from "./userApi";
import postReducer from "./postSlice"
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer:{
        tasks: taskReducer,
        gallery:GalleryReducer,
        post: postReducer,
        [userApi.reducerPath]:userApi.reducer,

    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(userApi.middleware)
    
  })
  
setupListeners(store.dispatch);
  export default store;