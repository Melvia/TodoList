import { useState } from "react";
import app from "./app.module.css";
import List from "../List/List";

import Header from "../Header/Header";
import { ThemeContext } from "../../context/ThemeContext.js";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./../../redux/slice";

import { SMALL } from "./../../constants/fontSizes";

const App = () => {
  const [context, setContext] = useState(SMALL);

  const { items, text } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
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
