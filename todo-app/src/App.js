import React,{ useState, useEffect } from "react";
import Headers from './components/Headers';
import Forms from './components/Forms';
import Todoslist from './components/Todoslist';
import './App.css';

const App= () => { 

  const initialState=JSON.parse(localStorage.getItem("todos")) || [];
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState(initialState);
  const [editTodo,setEditTodo]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Headers/>
            
        </div>
        <div>
        <Forms input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        </div>
        <div>
          <Todoslist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
