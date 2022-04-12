import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import User from './components/User'
import Gallery from './components/Gallery'
import Post from './components/Post'
import "./App.css"
const App = () => {
return (

<div className="app">

<h1 className="app-title">My Tasks</h1>
<AddTodo/>
<TodoList/>
<Gallery/>
<User/>
<Post/>

</div>

)
}

export default App