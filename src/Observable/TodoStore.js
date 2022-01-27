import { BASE } from "./../constants/typesImportance";
import { makeAutoObservable } from "mobx";
import { ALL } from "./../constants/filterTypes";

class TodoStore {
  items = [];
  filterType = ALL;
  text="";
  isDone = false;
  importance = BASE;


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

  constructor() {
    makeAutoObservable(this);

  }

  changeFilter(value) {
    this.filterType = value;
  }

  changeText(value) {
    this.text = value;
  }
}

const todostore = new TodoStore();
export default todostore;
