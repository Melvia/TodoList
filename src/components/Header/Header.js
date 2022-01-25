import React from "react";
import header from "./header.module.css";
import app from "./../App/app.module.css";
import PropTypes from "prop-types";

import ThemedButton from "./../ThemedButton/ThemedButton";

import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem, changeImportance, changeIsDone } from "./../../redux/slice";




const Header = (props) => {
const { text } = useSelector((state) => state.todo);
const dispatch = useDispatch();
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
          value={text}
        />

        <button className={app.button}>+</button>
      </form>
    </>
  );
};



export default Header;
