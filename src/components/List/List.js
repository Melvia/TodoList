import React from "react";
import Item from "../Item/Item";
import lst from "./list.module.css";

class List extends React.Component {
  removeItem(id) {
    this.props.handleRemoveTodo(id);
  }

  changeImportance(id, importance) {
    this.props.changeImportance(id, importance);
  }

  changeIsDone(id) {
    this.props.changeIsDone(id);
  }

  render() {
    // alert(this.props.filterType);
    return (
      <ol className={lst.todolist}>
     
        
        {this.props.items.map(
          (item) =>
            (this.props.filterType === 2 ||
              !!this.props.filterType === item.isDone) && (
              <Item
                key={item.id.toString()}
                id={item.id}
                text={item.text}
                removeItem={() => {
                  this.removeItem(item.id);
                }}
                changeImportance={(e) => {
                  this.changeImportance(item.id, e.target.value);
                }}
                importance={item.importance}
                isDone={item.isDone}
                changeIsDone={() => this.changeIsDone(item.id)}
              />
            )
        )}
 
      </ol>
    );
  }
}

export default List;
