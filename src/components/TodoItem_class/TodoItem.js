import React from "react";
import i from "./style.module.css";
import a from "./../TodoApp_class/style.module.css"


class TodoItem extends React.Component {


  render() {
  
      return (
        <li id={this.props.id} className={this.props.importance == 1 ? i.important : this.props.importance == 2 ? i.most_important : ""}>
       <label className={i.item} >
          <input
            className={i.input}
              type="checkbox"          
              checked={this.props.isDone}
              onChange={this.props.changeIsDone}
            ></input>  
            <span className={this.props.isDone ? i.checked : "" }>{this.props.text}</span> 
          
  
          <div className= {i.info}>
          <select className = {i.importance}  onChange={this.props.changeImportance} value={this.props.importance}>
              <option value="0" >обычная</option>
              <option value="1" >важная</option>
              <option value="2" >очень важная</option>
          </select>
          <button className={a.button} onClick={this.props.removeItem} >-</button>
          
          </div>
          
          </label>
  
          
          
          
  
        </li>
      );
    
 
  }
}

export default TodoItem;
