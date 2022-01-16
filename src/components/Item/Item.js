import React from "react";
import i from "./item.module.css";
import a from "./../App/app.module.css";
import classNames from "classnames/bind";
import { ThemeContextConsumer } from "./../../context/ThemeContext";

let cx = classNames.bind(i);

class Item extends React.Component {
  render() {
    let className = cx({
      important: this.props.importance === "1",
      most_important: this.props.importance === "2",
      base: true,
    });

    let spanClassName = cx({
      checked: this.props.isDone,
      "": !this.props.isDone,
    });

 


    return (
      <ThemeContextConsumer>
        {(context) => (
          <li id={this.props.id} className={`${className} ${context.theme}`}>
            <label className={i.item}>
              <input
                className={`${i.input} ${context.theme}`}
                type="checkbox"
                checked={this.props.isDone}
                onChange={this.props.changeIsDone}
              ></input>

              <span className={spanClassName}>{this.props.text}</span>

              <div className={i.info}>
                <select
                  className={`${i.importance} ${context.theme}`}
                  onChange={this.props.changeImportance}
                  value={this.props.importance}
                >
                  <option value="0">обычная</option>
                  <option value="1">важная</option>
                  <option value="2">очень важная</option>
                </select>
                <button className={a.button} onClick={this.props.removeItem}>
                  -
                </button>
              </div>
            </label>
          </li>
        )}
      </ThemeContextConsumer>
    );
  }
}
Item.contextType = ThemeContextConsumer;

export default Item;
