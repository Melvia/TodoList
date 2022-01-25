import React, { useState, useContext } from "react";
import Item from "../Item/Item";
import lst from "./list.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  changeImportance,
  changeIsDone,
} from "./../../redux/slice";


const List = (props) => {


  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  /*
  const removeItem = (id) => {
    props.handleRemoveTodo(id);
  };

  const handleChangeImportance = (id, importance) => {
    props.changeImportance(id, importance);
  };

  const handleChangeIsDone = (id) => {
    props.changeIsDone(id);
  };

*/
 
  return (
    <ol className={lst.todolist}>
      {todo.items.map(
        (item) =>
          (props.filterType === 2 || !!props.filterType === item.isDone) && (
            
              (
                <Item
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  importance={item.importance}
                  isDone={item.isDone}
                /*  theme={context.theme} 
                  removeItem={() => {
                    removeItem(item.id);
                  }}
                  changeImportance={(e) => {
                    handleChangeImportance(item.id, e.target.value);
                  }}
               
                  changeIsDone={() => handleChangeIsDone(item.id)}
                  */
                />
              )

            
          )
      )}
    </ol>
  );
};

List.propTypes = {
  handleRemoveTodo: PropTypes.func,
  handlechangeImportance: PropTypes.func,
  handleChangeIsDone: PropTypes.func,
  items: PropTypes.array,
  context: PropTypes.string,
};

export default List;
