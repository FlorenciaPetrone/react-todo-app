import React, {useEffect, useState} from "react"
import './App.css';
//Importing Components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  //State stuff
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  //RUN JUST ONCE when the app starts 
  useEffect(() => {
    getLocalTodos()
  },[])

  //UseEffect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])
   
  // Functions 
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true ))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }  
  //Save to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Flor's todo list</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        setTodos={setTodos} 
        todos={todos} 
        inputText={inputText}
        setStatus= {setStatus}
        filterHandler={filterHandler}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos= {filteredTodos}
      />
    </div>
  );
}

export default App;
