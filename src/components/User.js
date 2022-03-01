import React from 'react'

import { useGetAlluserQuery, userApi } from '../redux/userApi'
const User=()=>{
    const { data, error, isLoading, isSuccess, isError } = useGetAlluserQuery()
  
    return (
      <div className="App">
        <h1>Welcome to React Redux Toolkit RTK Query</h1>
        {isLoading && "Loading..."}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.map((user, i) => <h1 key={user.id}>{user.name}</h1>)}
      </div>
    );
  }

export default User