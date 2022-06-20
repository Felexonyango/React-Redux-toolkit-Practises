import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi=createApi({

    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
         baseUrl: 'https://jsonplaceholder.typicode.com/'
        
        }),
       endpoints:(builder)=>({

        getAlluser:builder.query({
            query:()=>({
                url:"users",
                method:'GET'
            })
            
        }),

        getUserById:builder.query({

            query:(id)=>({
                url:`users/${id}`,
                method:'GET'
            })
        })
    })


})

export const {useGetAlluserQuery,useGetUserByIdQuery} =userApi