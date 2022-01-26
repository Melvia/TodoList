import {BASE} from '../constants/typesImportance';
import { observer } from "mobx-react-lite";
import { makeObservable, observable, computed, action } from "mobx";


class TodoList {
    items = [];

    changeImportance(importance) {
        this.items = this.items.map((element) =>  element.id === action.payload.id ? { ...element, importance: action.payload.importance } : element)
    }

    changeIsDone(id) {      
        this.items = this.items.map((element) =>  element.id === action.payload ? { ...element, isDone: !element.isDone } : element)
    }

    addItem(text)  {
        this.items.push({
            id: Date.now(),
            text: text,
            isDone: false,
            importance: BASE
          });
    }

    removeItem(id)  {
        this.items = this.items.filter((el) => el.id !== id);
    }
    
    constructor() {
        makeAutoObservable(this);
    }    
    

}

export default TodoList;