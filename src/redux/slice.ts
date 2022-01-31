import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ALL } from "../constants/filterTypes.ts";
import { BASE } from "./../constants/typesImportance.ts";
import TaskStates from '../constants/taskDoneStates.ts';
import {IItem, IApp} from './interface.ts';


const {TASK_NOT_DONE} = TaskStates;


const todoSlice = createSlice({
  name: "todo",
  initialState: {items:[], text:"", isDone:TASK_NOT_DONE, importance: BASE, filterType: ALL } as IApp,
  reducers: {
    addItem:  {
      reducer:(state, action:PayloadAction<IItem>) => {
        state.items.push(action.payload);
        
      },
      prepare: (text: string) => {
          const id = Date.now()          
          const isDone = TASK_NOT_DONE
          const importance = BASE
          return {payload: {id, isDone, importance, text}}
        }      
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((el:IItem) => el.id !== action.payload);
    },
    changeText: (state, action) => {
      state.text = action.payload;
    },

    changeImportance: (state, action) => {
      state.items = state.items.map((element:IItem) =>
        element.id === action.payload.id
          ? { ...element, importance: action.payload.importance }
          : element
      );
    },

    changeIsDone: (state, action) => {
      state.items = state.items.map((element:IItem) =>
        element.id === action.payload
          ? { ...element, isDone: !element.isDone }
          : element
      );
    },

    filter: (state, action) => {
      state.filterType = parseInt(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  removeItem,
  addItem,
  changeImportance,
  changeIsDone,
  changeText,
  filter,
} = todoSlice.actions;


export default todoSlice.reducer;
