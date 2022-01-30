import React from "react";
import app from "./app.module.css";
import List from "../List/List";
import ThemedButton from "./../ThemedButton/ThemedButton";
import { ALL, IS_DONE, IS_NOT_DONE } from "./../../constants/filterTypes";
import {
  BASE,
  IMPORTANT,
  MOST_IMPORTANT,
} from "../../constants/typeImportance";
import { TASK_IS_NOT_DONE } from "./../../constants/isDoneInformation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      isDone: TASK_IS_NOT_DONE,
      importance: BASE,
      filterType: ALL,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleChangeImportance = this.handleChangeImportance.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.hanldeChangeIsDone = this.hanldeChangeIsDone.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    if (
      this.state.items.some(
        (element) =>
          element.text.toLowerCase() === this.state.text.toLowerCase()
      )
    ) {
      return alert("такой пункт уже есть");
    }

    const newItem = {
      text: this.state.text,
      id: Date.now(),
      isDone: TASK_IS_NOT_DONE,
      importance: BASE,
      filterType: ALL,
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
    const newArray = this.state.items.map((element) =>
      element.id === id ? { ...element, importance: importance } : element
    );
    this.setState({
      items: newArray,
    });
  }

  hanldeChangeIsDone(id) {
    const newArray = this.state.items.map((element) =>
      element.id === id ? { ...element, isDone: !element.isDone } : element
    );

    this.setState({
      items: newArray,
    });

    this.setState({
      items: newArray,
    });
  }

  handleFilter(e) {
    this.setState({
      filterType: parseInt(e.target.value),
    });
  }

  render() {
    return (
      <div className={app.container}>
        <div className={app["todo-header"]}>
          <h1>Список дел</h1>

          <select
            className={app.select}
            defaultValue={this.state.filterType}
            onChange={this.handleFilter}
          >
            <option value={ALL}>все задачи</option>
            <option value={IS_DONE}>выполненные задачи</option>
            <option value={IS_NOT_DONE}>текущие задачи</option>
          </select>
          <ThemedButton />
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

        <List
          items={this.state.items}
          handleRemoveTodo={this.handleRemoveTodo}
          changeImportance={this.handleChangeImportance}
          filterType={this.state.filterType}
          changeIsDone={this.hanldeChangeIsDone}
        />
      </div>
    );
  }
}

export default App;
