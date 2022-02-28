import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import Gallery from './components/Gallery'
import "./App.css"
const App = () => {
return (

<div className="app">

<h1 className="app-title">My Tasks</h1>
<AddTodo/>
<TodoList/>
<Gallery/>

</div>

)
}

export default App