import {useState} from "react";

function SimpleTodo(){
    let [todos, setTodos] = useState([]);
    let [inputValue, setInputValue] = useState("");

    function handleChange(e,){
        setInputValue(e.target.value)
    }

    function handleSubmit(e,){
        e.preventDefault();
        setTodos([...todos,{id:Date.now(), text:inputValue, completed:false}]);
        setInputValue("");
    }

    function handleToggle(id){
        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, completed: !todo.completed}:todo
        )))
    }
    

    return(
        <>
        <h1>Simple Todo</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleChange}/>

            <input type="submit"/>
        </form>

        <div>
            <ul>
            {todos.map((todo,index) => {
                return (
                    <li key={index}>
                        <label style={{marginRight:"10%", fontWeight:"bold"}}>{todo.text}</label>
                        <input style={{marginRight:"2%"}}
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => {handleToggle(todo.id)}}
                        />
                        <span>{todo.completed ? "Completed" : "Undo"}</span>
                    </li>
                )  
            })}
            </ul>
        </div>
        </>
    )
}

export default SimpleTodo;