import React from "react";
import i from "./item.module.css";
import a from "./../App/app.module.css";
import classNames from "classnames/bind";
import {BIG, SMALL} from './../../constants/fontSizes'
import {BASE, IMPORTANT, MOST_IMPORTANT} from './../../constants/typeImportance'

let cx = classNames.bind(i);
let cx1 = classNames.bind(i);

class Item extends React.Component {
  render() {
    let className = cx({
      important: this.props.importance === IMPORTANT,
      most_important: this.props.importance === MOST_IMPORTANT,
      base: true,
    });

    let spanClassName = cx({
      checked: this.props.isDone,
      "": !this.props.isDone,
    });

    let themeClassName = cx({
      small: this.props.theme === SMALL,
      big: this.props.theme === BIG,
    });


    return (
      
        (
          <li id={this.props.id} className={`${className} ${themeClassName}`}>
            <label className={i.item}>
              <input
                className={`${i.input} ${themeClassName}`}
                type="checkbox"
                checked={this.props.isDone}
                onChange={this.props.changeIsDone}
              ></input>

              <span className={spanClassName}>{this.props.text}</span>

              <div className={i.info}>
                <select
                  className={`${i.importance} ${themeClassName}`}
                  onChange={this.props.changeImportance}
                  value={this.props.importance}
                >
                  <option value={BASE}>обычная</option>
                  <option value={IMPORTANT}>важная</option>
                  <option value={MOST_IMPORTANT}>очень важная</option>
                </select>
                <button className={a.button} onClick={this.props.removeItem}>
                  -
                </button>
              </div>
            </label>
          </li>
        )
      
    );
  }
}


export default Item;
