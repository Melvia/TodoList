import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slice";


const store =  configureStore({
  reducer: {
    todo: todoSliceReducer,    
  },

});

export type RootState  = ReturnType<typeof store.getState>;

export default store;