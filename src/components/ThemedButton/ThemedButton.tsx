import React, { useContext } from "react";
import a from "./../App/app.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import  {BIG, SMALL} from "../../constants/fontSizes.ts";

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
