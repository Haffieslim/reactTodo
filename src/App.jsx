
import React, {useState} from 'react'
import './App.css'
import { Component} from 'react'

import TodoForm from './Component/TodoForm'
import TodoApp from `./Component/TodoApp`
import Header from './Component/Header'

function App() {
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <div className='container'>
      <Header />
      <div>
      <TodoForm inputValue={inputValue} setinputValue={setinputValue} todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit}/>
      </div>
      <div>
      <Showtodo todos={todos} setTodos={setTodos} setEdit={setEdit}/>
      </div>
    
    </div>
  )
}




export default App;