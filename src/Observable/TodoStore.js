import { BASE } from "./../constants/typesImportance";
import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import { ALL } from "./../constants/filterTypes";

class TodoStore {
  items = [];
  filterType = ALL;

  changeImportance(id, importance) {
    this.items = this.items.map((element) =>
      element.id === id ? { ...element, importance: importance } : element
    );
  }

  changeIsDone(id) {
    this.items = this.items.map((element) =>
      element.id === id ? { ...element, isDone: !element.isDone } : element
    );
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter((el) => el.id !== id);
  }

  constructor(filterType) {
    makeAutoObservable(this);
    this.filterType = filterType;
  }

  filter(value) {
    this.filterType = value;
  }
}

export default TodoStore;
