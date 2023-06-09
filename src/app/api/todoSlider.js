import { createSlice } from "@reduxjs/toolkit";

export const todoSlider = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      { id: 1, content: "Hit the Gym" },
      { id: 2, content: "Meet Me" },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Date.now(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addToDo, deleteToDo, editTodo } = todoSlider.actions;
export default todoSlider.reducer;
