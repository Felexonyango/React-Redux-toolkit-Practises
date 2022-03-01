import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice"
import GalleryReducer from "./GallerySlice"
import { userApi } from "./userApi";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
    reducer:{
        tasks: taskReducer,
        gallery:GalleryReducer,
        [userApi.reducerPath]:userApi.reducer,

    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(userApi.middleware)
    
  })
  
setupListeners(store.dispatch);
  export default store;