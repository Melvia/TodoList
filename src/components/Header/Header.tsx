import React from "react";
import header from "./header.module.scss";
import app from "./../../pages/Todo/todo.module.scss";

import ThemedButton from "../ThemedButton/ThemedButton.tsx";

import { useDispatch, useSelector } from "react-redux";
import { changeText, filter } from "../../redux/slice.ts";
import {IHeaderProps} from './interface.ts'
import {RootState} from './../../redux/store.ts';

import { ALL, IS_DONE, IS_NOT_DONE } from "../../constants/filterTypes.ts";
import {BTN_ADD} from '../../constants/buttonNames.ts';

const Header = (props:IHeaderProps): JSX.Element  => {
  const { text, filterType } = useSelector((state:RootState) => state.todo);
  const dispatch = useDispatch();
  return (
    <>
      <div className={header["todo-header"]}>
        <h1>Список дел</h1>

        <select
          className={`${app.select} ${header.filter}`}
          defaultValue={filterType}
          onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
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
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(changeText(e.target.value))}
          value={text}
        />

        <button className={app.button}>{BTN_ADD}</button>
      </form>
    </>
  );
};

export default Header;
