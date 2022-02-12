import React from "react";
import Item from './../Item/Item.tsx';
import lst from "./list.module.scss";
import { useSelector } from "react-redux";
import { ALL } from "../../constants/filterTypes.ts";
import {RootState} from './../../redux/store.ts';
import {IApp, IItem} from './../../redux/interface.ts';

const List = (): JSX.Element => {
  const { items, filterType } = useSelector((state:RootState) => state.todo);

  return (
    <ol className={lst.todolist}>
      {items.map(
        (item:IItem) =>
          (filterType === ALL || !!filterType === item.isDone) && (
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

export default List;
