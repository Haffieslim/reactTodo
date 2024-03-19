import { useState } from "react";


const TodoApp = ({todos,setTodos,setEdit})=>{
    
            const Delete = ({id})=>{
            setTodos(todos.filter((todo)=> todo.id !==id))

        } 
        
        const Edit = ({id})=>{
            let Edit = todos.find((todo)=>todo.id === id)
            setEdit(Edit);
        }
    

    return(
        <>

            <div>
                {todos.map((todo)=>(
                    <li className="todoList" key={todo.id}>
                        
                        {todo.task} <button onClick={()=>Edit(todo)}>Edit</button> <button onClick={()=>Delete(todo)}>Delete</button>
                    </li>
                ))}
            </div>
            
        
        </>
    )
}

export default TodoApp;

