import React, { useState, useContext } from "react";
import Item from "../Item/Item";
import lst from "./list.module.css";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { ALL } from "./../../constants/filterTypes";

const TodoList = observer(({ TodoList }) => {
  return (
    <ol className={lst.todolist}>
      {props.items.map(
        (item) =>
          (props.filterType === ALL || !!props.filterType === item.isDone) && (
            <Item
              key={item.id}
              id={item.id}
              text={item.text}
              removeItem={() => {
                removeItem(item.id);
              }}
              changeImportance={(e) => {
                handleChangeImportance(item.id, e.target.value);
              }}
              importance={item.importance}
              isDone={item.isDone}
              changeIsDone={() => handleChangeIsDone(item.id)}
            />
          )
      )}
    </ol>
  );
});

export default List;
