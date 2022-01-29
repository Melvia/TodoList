import { createSlice } from "@reduxjs/toolkit";
import { ALL } from "../constants/filterTypes.ts";
import { BASE } from "./../constants/typesImportance";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    text: "",
    isDone: false,
    importance: BASE,
    filterType: ALL,
  },
  reducers: {
    removeItem: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        isDone: false,
        importance: BASE,
        filterType: ALL,
      });
      state.text = "";
    },
    changeText: (state, action) => {
      state.text = action.payload;
    },

    changeImportance: (state, action) => {
      state.items = state.items.map((element) =>
        element.id === action.payload.id
          ? { ...element, importance: action.payload.importance }
          : element
      );
    },

    changeIsDone: (state, action) => {
      state.items = state.items.map((element) =>
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
