import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "./App.css";
import { Component } from "react";
import {useEffect} from "react"

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.state.todos=JSON.parse(localStorage.getItem('todos')) || []
  }

  newTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  };

  deleteHandler = (e) => {
    const filteredTodo = this.state.todos.filter((el) => {
      return el.id !== e.target.id;
    });
    this.setState({ todos: filteredTodo });
  };

  


  checkedHandler=(e)=>{
   const todos = [...this.state.todos]
    todos.map((el)=>{
      if (el.id === e.target.id) {
        el.complete = !el.complete;
      }
      return el;
    })
    this.setState({todos})
  }

  



  render() {
    return (
      <div className="App">
        
        <AddTodo newTodo={this.newTodo.bind(this)} />

        <Todo todos={this.state.todos} delete={this.deleteHandler} checked={this.checkedHandler} />
      </div>
    );
  }
}

export default App;
