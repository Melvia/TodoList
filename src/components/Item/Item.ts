import React, { useContext } from "react";
import * as i from "./item.module.css";
import * as a from "./../App/app.module.css";
import classNames from "classnames/bind";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch} from "react-redux";

import {BIG, SMALL} from '../../constants/fontSizes'
import {IMPORTANT, MOST_IMPORTANT} from '../../constants/typesImportance'

import {
  removeItem,
  changeImportance,
  changeIsDone,
} from "../../redux/slice";

const Item = (props) => {
  
  const dispatch = useDispatch(); 

  const [context] = useContext(ThemeContext);
  let cx = classNames.bind(i);

  const clsName : string = i.class__
  let className = cx({
    important: props.importance === "1",
    most_important: props.importance === "2",
    base: true,
  });

  let spanClassName = cx({
    checked: props.isDone,
    "": !props.isDone,
  });

  let themeClassName = cx({
    small: context === SMALL,
    big: context === BIG,
  });

  return (
    <li id={props.id} className={`${className} ${themeClassName}`}>
      <label className={i.item}>
        <input
          className={`${i.input} ${themeClassName}`}
          type="checkbox"
          checked={props.isDone}
          onChange={() => dispatch(changeIsDone(props.id))}
        ></input>

        <span className={spanClassName}>{props.text}</span>

        <div className={i.info}>
          <select
            className={`${i.importance} ${themeClassName}`}
            onChange={(e) =>{dispatch(changeImportance({id: props.id, importance: e.target.value}))} }
            value={props.importance}
          >
            <option value="0">обычная</option>
            <option value="1">важная</option>
            <option value="2">очень важная</option>
          </select>
          <button
            className={a.button}
            onClick={() => dispatch(removeItem(props.id))}
          >
            -
          </button>
        </div>
      </label>
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  importance: PropTypes.string.isRequired,

};

export default Item;
