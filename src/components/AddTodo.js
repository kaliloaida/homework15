import { Component } from "react";
import Button from "./UI/Button";
import './AddTodo.css'
import Card from "./UI/Card";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  AddTodoChange = (e) => {
    e.preventDefault();
    const newData = {
      id: Math.random().toString(),
      complete: false,
      text: this.state.value,
      date: new Date().toLocaleDateString(),
    };
    this.props.newTodo(newData);
    console.log(newData);
  };

  render() {
    return (
      <Card className="addtodo" >
        <input type="text" onChange={this.handleChange} />
        <Button onClick={this.AddTodoChange.bind(this)}>AddTodo</Button>
      </Card>
    );
  }
}
export default AddTodo;
