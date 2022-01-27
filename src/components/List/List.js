import React from "react";
import Item from "../Item/Item";
import lst from "./list.module.css";
import PropTypes from "prop-types";
import { ALL } from "./../../constants/filterTypes";

const List = (props) => {
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
                props.handleRemoveTodo(item.id);
              }}
              changeImportance={(e) => {
                props.handleChangeImportance(item.id, e.target.value);
              }}
              importance={item.importance}
              isDone={item.isDone}
              changeIsDone={() => props.handleChangeIsDone(item.id)}
            />
          )
      )}
    </ol>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
