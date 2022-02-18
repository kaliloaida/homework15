import { Component } from "react";
import './Card.css'

class Card extends Component{
    render(){
        return(
            <div className={` ${Card}  ${this.props.className}`}>{this.props.children}</div>
        )
    }
}
export default Card