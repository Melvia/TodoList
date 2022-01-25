import React from "react";
import Item from "../Item/Item";
import lst from "./list.module.css";
import PropTypes from "prop-types";
import {  useSelector } from "react-redux";

const List = (props) => {
  
  const { items, filterType } = useSelector((state) => state.todo);
  
    return (
    <ol className={lst.todolist}>
      {items.map(
        (item) =>
          (filterType === 2 || !!filterType === item.isDone) && (
            <Item
              key={item.id}
              id={item.id}
              text={item.text}
              importance={item.importance}
              isDone={item.isDone}

            />
          )
      )}
    </ol>
  );
};

List.propTypes = {
  items: PropTypes.array
};

export default List;
