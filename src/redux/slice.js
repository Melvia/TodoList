import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "todo",
  initialState: {items: [],
                  text: "",
                  isDone: false,
                  importance: "0",
                  filterType: 2, },
  reducers: {
    removeItem: (state, action) => {
      state.items.filter((el) => el.id !== action.payload.id);
    },
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: state.text,
        isDone: false,
        importance: "0",
        filterType: 2,
      });
    },

    changeImportance: ({items}, action) => {
      items = items.map((element) =>  element.id === action.payload.id ? { ...element, importance: action.payload.importance } : element)
    },

    changeIsDone: ({items}, action) => {
      items = items.map((element) =>  element.id === action.payload.id ? { ...element, isDone: !element.isDone } : element)
    },

    filter: ({filterType}, action) => {
      filterType = parseInt(action.payload);
    }

  },
});

// Action creators are generated for each case reducer function
export const { removeItem, addItem, changeImportance, changeIsDone } = todoSlice.actions;

export default todoSlice.reducer;
