
const TodoForm = ({inputValue, setinputValue, todos, setTodos,edit,setEdit})=>{
    
    const updateTodo = (title,id,completed)=>{
    const newtodo = todos.map((todo)=>{
        todo.id === id?(task,id,completed) :todo
    })
    setTodos(newtodo);
    setEdit("");

 }

    const submitHandler = (event)=>{
        event.preventDefault();

        if(!edit){
            setTodos([...todos, {id: todos.length + 1, task: inputValue, completed:false, isEditing:false}]);
       
            setinputValue("");
        }else{
            updateTodo(inputValue, edit.id, edit.completed)
        }
       
    }
    return(
        <>
            <form className="form" 
             onSubmit={submitHandler}>
                <input type ="text" 
                placeholder="Enter a task " 
                value = {inputValue} 
                onChange={(e)=> setinputValue(e.target.value)}>

                </input>
                
                <button type="submit">ADD a Task</button>
            </form>
        
        </>
    )
}

export default TodoForm;