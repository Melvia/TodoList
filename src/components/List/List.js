import React, { useState, useContext } from "react";
import Item from "../Item/Item";
import lst from "./list.module.css";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { ALL } from "./../../constants/filterTypes";

//const todolist = new TodoList();
const List = (props) => {
  return (
    <ol className={lst.todolist}>
      {props.items.map(
        (item) =>
          (<Item
              key={item.id}
              id={item.id}
              text={item.text}
              removeItem={() => {
                props.removeItem(item.id);
              }}
              changeImportance={(e) => {
                props.changeImportance(item.id, e.target.value);
              }}
              importance={item.importance}
              isDone={item.isDone}
              changeIsDone={() => props.changeIsDone(item.id)}
            />
          )
      )}
    </ol>
  );
};

export default List;
