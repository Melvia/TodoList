import React from "react";
import header from "./header.module.css";
import app from "./../App/app.module.css";

import ThemedButton from "./../ThemedButton/ThemedButton";

import { useDispatch, useSelector } from "react-redux";
import { changeText, filter } from "./../../redux/slice";

import { ALL, IS_DONE, IS_NOT_DONE } from "./../../constants/filterTypes";

const Header = (props) => {
  const { text, filterType } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <>
      <div className={header["todo-header"]}>
        <h1>Список дел</h1>

        <select
          className={header.select}
          defaultValue={filterType}
          onChange={(e) => {
            dispatch(filter(e.target.value));
          }}
        >
          <option value={ALL}>все задачи</option>
          <option value={IS_DONE}>выполненные задачи</option>
          <option value={IS_NOT_DONE}>текущие задачи</option>
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
          onChange={(e) => dispatch(changeText(e.target.value))}
          value={text}
        />

        <button className={app.button}>+</button>
      </form>
    </>
  );
};

export default Header;
