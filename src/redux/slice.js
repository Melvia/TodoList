import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    removeItem: (items, action) => {
      items.filter((el) => el.id !== action.payload.id);
    },
    addItem: (items, action) => {
      items.push({
        id: Date.now(),
        text: action.payload.text,
        isDone: false,
        importance: "0",
        filterType: 2,
      });
    },

    changeImportance: (items, action) => {
      items = items.map((element) =>  element.id === action.payload.id ? { ...element, importance: action.payload.importance } : element)
    },

    changeIsDone: (items, action) => {
      items = items.map((element) =>  element.id === action.payload.id ? { ...element, isDone: !element.isDone } : element)
    },

  },
});

// Action creators are generated for each case reducer function
export const { removeItem, addItem, changeImportance, changeIsDone } = todoSlice.actions;

export default todoSlice.reducer;
