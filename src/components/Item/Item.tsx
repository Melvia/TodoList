import React, { useContext } from "react";
import i from "./item.module.scss";
import a from "./../../pages/Todo/todo.module.scss";
import classNames from "classnames/bind";
import { ThemeContext } from "../../context/ThemeContext.ts";
import { useDispatch} from "react-redux";

import {BIG, SMALL} from '../../constants/fontSizes.ts';
import {IMPORTANT, MOST_IMPORTANT} from '../../constants/typesImportance.ts';
import {BTN_REMOVE} from '../../constants/buttonNames.ts';
import ItemProps from './interface';

import {
  removeItem,
  changeImportance,
  changeIsDone,
} from "../../redux/slice.ts";

const Item = (props: ItemProps): JSX.Element => {
  
  
  const dispatch = useDispatch(); 

  const [context] = useContext(ThemeContext);
  let cx = classNames.bind(i);
   
  let className:any = cx({
    important: props.importance === IMPORTANT,
    most_important: props.importance === MOST_IMPORTANT,
    base: true,
  });

  let spanClassName:any = cx({
    checked: props.isDone,
    "": !props.isDone,
  });

  let themeClassName:any = cx({
    small: context === SMALL,
    big: context === BIG,
  });


  return (<li id={props.id.toString()} className={`${className} ${themeClassName}`}>
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
            className={`${a.select} ${i.importance} ${themeClassName}`}
            onChange={(e:React.ChangeEvent<HTMLSelectElement>) =>{dispatch(changeImportance({id: props.id, importance: e.target.value}))} }
            value={props.importance}
          >
            <option value="0">обычная</option>
            <option value="1">важная</option>
            <option value="2">очень важная</option>
          </select>
          <button
            className={a.button}
            onClick={() => dispatch(removeItem(props.id))}>
            {BTN_REMOVE}
          </button>
        </div>
      </label>
    </li>
  );
  
};

export default Item;
