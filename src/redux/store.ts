import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slice.ts";
import { useDispatch } from 'react-redux'


const store =  configureStore({
  reducer: {
    todo: todoSliceReducer,    
  },

});



export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); 


export default store;