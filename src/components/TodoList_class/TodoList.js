import React from "react";
import TodoItem from "./../TodoItem_class/TodoItem";
import lst from "./style.module.css";

class TodoList extends React.Component {
  removeItem(id) {
    this.props.handleRemoveTodo(id);
  }

  changeImportance(id, importance) {
    this.props.changeImportance(id, importance);
  }

  changeIsDone(id, isDone) {
    this.props.changeIsDone(id, isDone);
  }

  render() {
    // alert(this.props.filterType);
    return (
      <ol className={lst.todolist}>
        {this.props.items.map(
          (item) =>
            (this.props.filterType == 2 ||
              this.props.filterType == item.isDone) && (
              <TodoItem
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
                changeIsDone={() => this.changeIsDone(item.id, item.isDone)}
              />
            )
        )}
      </ol>
    );
  }
}

export default TodoList;
