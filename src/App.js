//import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
// import { About } from './MyComponents/About';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am on delete todo", todo)
    // Deleting this way in react does not work 
    // let index=todos.indexOf(todo)
    // todos.splice(index,1)
    setTodos(todos.filter((e) => {
      return e!== todo
    }));

    console.log("deleted",todos);

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    //console.log("I am addig this todo",title,desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    //console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
        
          <Header title="MyTodo List" searchBar={false} />
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          <Footer />
    </>
  );
}

export default App;
