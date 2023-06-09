import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./api/todoSlider";
export default configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
