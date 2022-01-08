import React from "react";
import app from "./style.module.css";

import TodoList from "./../TodoList_class/TodoList";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      isDone: false,
      importance: 0,
      filterType: 2
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleChangeImportance = this.handleChangeImportance.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.hanldeChangeIsDone = this.hanldeChangeIsDone.bind(this);
  }

  render() {
    return (
      <div className = {app.container}>
        <div className={app['todo-header']}>
          <h1>Список дел</h1>

          <select
            className={app.select}
            defaultValue={this.state.filterType}
            onChange={this.handleFilter}
          >
            <option value="2">все задачи</option>
            <option value="1">выполненные задачи</option>
            <option value="0">текущие задачи</option>
          </select>
        </div>

        <form className={app.form} onSubmit={this.handleSubmit}>
          <input
            className={app.input}
            type="text"
            aria-label="Описание задачи"
            placeholder="Например, прочитать про redux"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />

          <button className={app.button}>+</button>
        </form>

        <TodoList
          items={this.state.items}
          handleRemoveTodo={this.handleRemoveTodo}
          changeImportance={this.handleChangeImportance}
          filterType={this.state.filterType}
          changeIsDone={this.hanldeChangeIsDone}
        />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    if (this.state.items.some((element) => element.text === this.state.text)) {
      alert("такой пункт уже есть");
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now(),
      isDone: false,
      importance: 0,
      filterType: 2
    };

    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }

  handleRemoveTodo(id) {
    this.setState({
      items: this.state.items.filter((el) => el.id !== id),
    });
  }

  handleChangeImportance(id, importance) {
    const newArray = [...this.state.items];
    const changeElementIndex = newArray.findIndex((el) => el.id === id);
    newArray[changeElementIndex].importance = importance;
    this.setState({
      items: newArray,
    });
  }

  hanldeChangeIsDone(id, isDone) {
    const newArray = [...this.state.items];
    const changeElementIndex = newArray.findIndex((el) => el.id === id);

    newArray[changeElementIndex].isDone = !isDone;
    this.setState({
      items: newArray,
    });
  }

  handleFilter(e) {
    
    this.setState({
      filterType: parseInt(e.target.value),
    });

  }
}

export default TodoApp;
