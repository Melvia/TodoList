import { useCallback, useState } from "react";
import app from "./app.module.css";
import List from "../List/List";
import Header from "../Header/Header";
import { ThemeContext } from "../../context/ThemeContext.js";

import { observer, inject } from "mobx-react";
import { SMALL } from "./../../constants/fontSizes";

const App = ({ store }) => {
  const { text } = store;
  const [context, setContext] = useState(SMALL);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) {
      return;
    }

    for (let item of store.items) {
      if (item.text.toLowerCase() === text.toLowerCase()) {
        return alert("такой пункт уже есть");
      }
    }

    const newItem = {
      text: text,
      id: Date.now(),
      isDone: false,
      importance: "0",
    };
    store.addItem(newItem);
    store.changeText("");
  };

  const handleRemoveTodo = useCallback(
    (id) => {
      store.removeItem(id);
    },
    [store.items]
  );

  const handleChangeIsDone = useCallback(
    (id) => {
      store.changeIsDone(id);
    },
    [store.items]
  );

  const handleChangeImportance = useCallback(
    (id, importance) => {
      store.changeImportance(id, importance);
    },
    [store.items]
  );

  const handleFilter = useCallback(
    (e) => {
      store.changeFilter(parseInt(e.target.value));
    },
    [store.filterType]
  );

  return (
    <>
      <ThemeContext.Provider value={[context, setContext]}>
        <div className={app.container}>
          <Header
            filterType={store.filterType}
            handleFilter={handleFilter}
            handleSubmit={handleSubmit}
            handleChange={(e) => {
              store.changeText(e.target.value);
            }}
            text={store.text}
            store={store}
          />

          <List
            handleChangeImportance={handleChangeImportance}
            handleRemoveTodo={handleRemoveTodo}
            handleChangeIsDone={handleChangeIsDone}
            items={store.items}
            filterType={store.filterType}
          />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default inject("store")(observer(App));
