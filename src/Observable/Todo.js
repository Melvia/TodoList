import { makeObservable, observable, action} from 'mobx';
import {BASE} from './../constants/typesImportance';


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
        makeObservable(this, {
            items : observable,
            addItem : action,
            removeItem : action,
            changeImportance:action,
            changeIsDone:action,
        })        

        
    }

}

