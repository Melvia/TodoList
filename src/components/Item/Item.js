import React, { useContext } from "react";
import i from "./item.module.css";
import a from "./../App/app.module.css";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  changeImportance,
  changeIsDone,
} from "./../../redux/slice";

const Item = (props) => {
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [context, setContext] = useContext(ThemeContext);
  let cx = classNames.bind(i);

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
    small: context === "small",
    big: context === "big",
  });

  return (
    <li id={props.id} className={`${className} ${themeClassName}`}>
      <label className={i.item}>
        <input
          className={`${i.input} ${themeClassName}`}
          type="checkbox"
          checked={props.isDone}
          onChange={() => dispatch(changeIsDone())}
        ></input>

        <span className={spanClassName}>{props.text}</span>

        <div className={i.info}>
          <select
            className={`${i.importance} ${themeClassName}`}
            onChange={(e) => dispatch(changeImportance(e.target.value))}
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
  changeIsDone: PropTypes.func.isRequired,
  changeImportance: PropTypes.func.isRequired,
  importance: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Item;
