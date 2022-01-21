import { React, useContext } from "react";
import a from "./../App/app.module.css";
import {ThemeContext} from './../../context/ThemeContext'
export default function ThemedButton() {
  const [context, setContext] = useContext(ThemeContext);
  return (
    <div>
      <button className={a.button} onClick={() => setContext(context === "small" ? "big" : "small")}>
        Тема
      </button>
    </div>
  );
}




