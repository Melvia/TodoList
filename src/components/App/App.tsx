import React, { useState } from "react";
import app from "./app.module.css";
import List from "../List/List.tsx";

import Header from "../Header/Header.tsx";
import { ThemeContext } from "../../context/ThemeContext.js";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slice";

import { SMALL } from "../../constants/fontSizes.ts";
import {RootState} from './../../redux/store';

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
