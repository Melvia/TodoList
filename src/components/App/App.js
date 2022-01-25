import { useEffect, useState } from "react";
import app from "./app.module.css";
import List from "../List/List";
import withLoader from "../../HOC/LoadWrapper/WithLoader";
import Header from "../Header/Header";
import { ThemeContext } from "../../context/ThemeContext.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  changeText,
} from "./../../redux/slice";

const App = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [context, setContext] = useState("small");

  const { items, text} = useSelector((state) => state.todo);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 3000);

    return function cleanTimeout() {
      clearTimeout(timer);
    };
  }, []);

  const HeaderWithLoader = withLoader(Header, isLoading);

  return (
    <>
      <ThemeContext.Provider value={[context, setContext]}>
        <div className={app.container}>
          <HeaderWithLoader          
            handleSubmit={handleSubmit}
            handleChange={(e)=> dispatch(changeText(e.target.value)) }
            text={text}
          />

          <List />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
