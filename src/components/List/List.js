import React from "react";
import Item from "../Item/Item";
import lst from "./list.module.css";
import { ThemeContextConsumer } from "./../../context/ThemeContext";
import PropTypes from "prop-types";

class List extends React.Component {
  removeItem(id) {
    this.props.handleRemoveTodo(id);
  }

  handleChangeImportance(id, importance) {
    this.props.changeImportance(id, importance);
  }

  handleChangeIsDone(id) {
    this.props.changeIsDone(id);
  }

  render() {
    return (
      <ol className={lst.todolist}>
        {this.props.items.map(
          (item) =>
            (this.props.filterType === 2 ||
              !!this.props.filterType === item.isDone) && (
              <ThemeContextConsumer>
                {(context) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    theme={context.theme}
                    removeItem={() => {
                      this.removeItem(item.id);
                    }}
                    changeImportance={(e) => {
                      this.handleChangeImportance(item.id, e.target.value);
                    }}
                    importance={item.importance}
                    isDone={item.isDone}
                    changeIsDone={() => this.handleChangeIsDone(item.id)}
                  />
                )}
              </ThemeContextConsumer>
            )
        )}
      </ol>
    );
  }
}

List.propTypes = {
  handleRemoveTodo: PropTypes.func,
  handlechangeImportance: PropTypes.func,
  handleChangeIsDone: PropTypes.func,
  items: PropTypes.array,
  context: PropTypes.string,
};

export default List;
