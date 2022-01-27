import { React, useContext } from "react";
import a from "./../App/app.module.css";
import { ThemeContext } from "./../../context/ThemeContext";
import  {BIG, SMALL} from "./../../constants/fontSizes";

export default function ThemedButton() {

  const [context, setContext] = useContext(ThemeContext);
  return (
    <div>
      <button
        className={a.button}
        onClick={() => setContext(context === SMALL ? BIG : SMALL)}
      >
        Тема
      </button>
    </div>
  );
}
