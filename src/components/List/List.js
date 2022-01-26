import React, { useState, useContext } from "react";
import Item from "../Item/Item";
import lst from "./list.module.css";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import { ALL } from "./../../constants/filterTypes";

//const todolist = new TodoList();
const List = observer(({store}) => {
  return (
    <ol className={lst.todolist}>
      {store.items.map(
        (item) =>
          (store.filterType === ALL || !!store.filterType === item.isDone) && (
            <Item
              key={item.id}
              id={item.id}
              text={item.text}
              removeItem={() => {
                store.removeItem(item.id);
              }}
              changeImportance={(e) => {
                store.changeImportance(item.id, e.target.value);
              }}
              importance={item.importance}
              isDone={item.isDone}
              changeIsDone={() => store.changeIsDone(item.id)}
            />
          )
      )}
    </ol>
  );
});

export default List;
