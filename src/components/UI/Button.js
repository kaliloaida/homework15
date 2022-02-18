import { Component } from "react";
import './Button.css'
class Button extends Component{
    render(){
        return(
            <button onClick={this.props.onClick} id = {this.props.id} 
             className={` ${Button}  ${this.props.className}`} >{this.props.children}</button>
        )
    }
}
export default Button