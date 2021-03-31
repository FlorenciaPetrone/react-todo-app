import React from "react"        
import Todo from "./Todo"


function TodoList({todos, setTodos, filteredTodos}){

    return(
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredTodos.map(todo => (
                <Todo 
                    todos={todos}
                    setTodos={setTodos}
                    text={todo.text} 
                    key={todo.id} 
                    completed={todo.completed}
                    todo={todo}
                    
                />
            ))}
        </div>
    )
}

export default TodoList 