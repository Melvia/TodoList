import { useEffect, useState } from "react";
import app from "./app.module.css";
import List from "../List/List";
import withLoader from "../../HOC/LoadWrapper/WithLoader";
import Header from "../Header/Header";
import { ThemeContext } from "../../context/ThemeContext.js";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./../../redux/counter";

const App = () => {
//  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [importance, setImportance] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [filterType, setFilterType] = useState(2);

  const [context, setContext] = useState("small");
/*
  const handleChange = (e) => {
    setText(e.target.value);
  };

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

    const newItem = {
      text: text,
      id: Date.now(),
      isDone: false,
      importance: "0",
      filterType: 2,
    };
    setItems([...items, newItem]);
    setText("");
  };

  const handleRemoveTodo = (id) => {
    setItems(items.filter((el) => el.id !== id));
  };

  const handleChangeImportance = (id, importance) => {
    const newArray = items.map((element) =>
      element.id === id ? { ...element, importance: importance } : element
    );
    setItems(newArray);
  };

  const hanldeChangeIsDone = (id) => {
    const newArray = items.map((element) =>
      element.id === id ? { ...element, isDone: !element.isDone } : element
    );

    setItems(newArray);
  };
*/
  const handleFilter = (e) => {
    setFilterType(parseInt(e.target.value));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 5000);

    return function cleanTimeout() {
      clearTimeout(timer);
    };
  }, []);

  const HeaderWithLoader = withLoader(Header, isLoading);

  //Убрать!!!
  
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  

  return (
    <>
      <ThemeContext.Provider value={[context, setContext]}>
        /* убрать!!! */
        <h1> The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>
          Increment by 33
        </button>
        /* конец убрать!!! */
        <div className={app.container}>
          <HeaderWithLoader
            filterType={filterType}
            handleFilter={handleFilter}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            text={text}
          />

          <List
            items={items}
            handleRemoveTodo={handleRemoveTodo}
            changeImportance={handleChangeImportance}
            filterType={filterType}
            changeIsDone={hanldeChangeIsDone}
          />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
