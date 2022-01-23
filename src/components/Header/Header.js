import React from "react";
import header from "./header.module.css";
import app from "./../App/app.module.css";
import PropTypes from "prop-types";

import ThemedButton from "./../ThemedButton/ThemedButton";

const Header = (props) => {
  return (
    <>
      <div className={header["todo-header"]}>
        <h1>Список дел</h1>

        <select
          className={header.select}
          defaultValue={props.filterType}
          onChange={props.handleFilter}
        >
          <option value="2">все задачи</option>
          <option value="1">выполненные задачи</option>
          <option value="0">текущие задачи</option>
        </select>
        <ThemedButton />
      </div>

      <form className={header.form} onSubmit={props.handleSubmit}>
        <input
          className={header.input}
          type="text"
          aria-label="Описание задачи"
          placeholder="Например, прочитать про redux"
          id="new-todo"
          onChange={props.handleChange}
          value={props.text}
        />

        <button className={app.button}>+</button>
      </form>
    </>
  );
};

Header.propTypes = {
  filterType: PropTypes.number,
  handleFilter: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default Header;
