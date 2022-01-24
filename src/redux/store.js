import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slice";


export default configureStore({
  reducer: {
    items: todoSliceReducer,    
  },

});
