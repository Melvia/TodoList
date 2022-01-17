import React from "react";
import header from "./header.module.css";
import app from "./../App/app.module.css";

import ThemedButton from "./../ThemedButton/ThemedButton";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className={header["todo-header"]}>
          <h1>Список дел</h1>

          <select
            className={header.select}
            defaultValue={this.props.filterType}
            onChange={this.props.handleFilter}
          >
            <option value="2">все задачи</option>
            <option value="1">выполненные задачи</option>
            <option value="0">текущие задачи</option>
          </select>
          <ThemedButton />
        </div>

        <form className={header.form} onSubmit={this.props.handleSubmit}>
          <input
            className={header.input}
            type="text"
            aria-label="Описание задачи"
            placeholder="Например, прочитать про redux"
            id="new-todo"
            onChange={this.props.handleChange}
            value={this.props.text}
          />

          <button className={app.button}>+</button>
        </form>
      </>
    );
  }
}

export default Header;
