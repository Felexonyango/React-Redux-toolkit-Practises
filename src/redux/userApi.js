import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi=createApi({

    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints:(builder)=>({
        //making query to users

        getAlluser:builder.query({
            query: () => `users`,
        })
    })


})
export const {useGetAlluserQuery} =userApi