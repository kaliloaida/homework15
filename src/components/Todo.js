import { Component } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import './Todo.css'

class Todo extends Component{

    render(){
        return(
            <Card className="todo" >
                {this.props.todos.map((el)=>{
                    return(
                        <Card key={el.id}  className="todo_li" >
                            <input type="checkbox"
                             onChange={this.props.checked.bind(this)} id={el.id}
                             checked={el.completed}
                             />
                    <li className={`${el.complete ? 'completed' : ""}`} >{el.text} {/* {el.date}  */} </li>
                    <span className="date">{el.date}</span>
                    <Button onClick={this.props.delete.bind(this)}  id={el.id}>Delete</Button>
                    </Card>
                    )
                    
                })}
                
            </Card>
        )
    }
}
export default Todo