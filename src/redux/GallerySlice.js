import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getphotos =createAsyncThunk(
'photos/getphotos',
async()=>{

    const response = await fetch('https://picsum.photos/v2/list?page=3&limit=9')
    const formatresponse =await response.json()
    return formatresponse
}


)

export const gallerSlice = createSlice({
    name: 'gallery',
    initialState:{
        photos:[],
        isLoading:false
    },
    extraReducers:{

        [getphotos.pending]:(state)=>{
            state.isLoading=true
        },
        [getphotos.fulfilled]:(state,action)=>{

            state.photos=action.payload
            state.isLoading=false
        },
        [getphotos.rejected]:(state)=>{

            state.isLoading=false
        }
    }
    
  })

  export default gallerSlice.reducer