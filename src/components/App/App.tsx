import React, { useState } from "react";
import app from "./app.module.css";
import List from "../List/List.tsx";

import Header from "../Header/Header.tsx";
import { ThemeContext } from "../../context/ThemeContext.js";
import { useDispatch, useSelector } from "react-redux";
import { addItem, changeText } from "../../redux/slice.ts";

import { SMALL } from "../../constants/fontSizes.ts";
import TaskStates from "./../../constants/taskDoneStates.ts";
import {BASE} from './../../constants/typesImportance.ts';

import {RootState} from './../../redux/store.ts';
import {IItem} from './interface.ts'

import store from './../../redux/store';

const {TASK_NOT_DONE} = TaskStates;

const App = (): JSX.Element => {
  const [context, setContext] = useState(SMALL);

  const { items, text } = useSelector((state:RootState) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!text.length) {
      return;
    }

    for (let item of items) {
      if (item.text.toLowerCase() === text.toLowerCase()) {
        return alert("такой пункт уже есть");
      }
    }

    dispatch(addItem(text));
    dispatch(changeText(""));
  };

  return (
    <>
      <ThemeContext.Provider value={[context, setContext]}>
        <div className={app.container}>
          <Header handleSubmit={handleSubmit} text={text} />
          <List />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;