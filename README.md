# vite_todolist_redux

Inspire by https://sadam-bapunawar.medium.com/to-do-app-with-react-redux-toolkit-47b7dc44bd90

1#vite installation
npm create vite@latest
then choose
a.project name
b.frame work
c.JavaScript

2#create my boiler app
npm install and npm run. I can run the react application using vite.
Delete react logo and remove some unnessary code to test my application.

3#install require packages
that is rect tool kit,react-redux and react -icons

4.create new file in src/app/storejs
import the configurestore from redux toolkit.
empty redux store and export it.

5.provide redux store to react.
When store is created.
around the <App> coated with
create the <Provider> from react-redux with pass
the store as prop

6.create A Redux Slider.
create file name of todolistSlider and import {createSlice} from RTK.

a.SLicer required string name to identify the slice
b.initial state.
c.one or more reducer function to define the state to update.

In this todolist, firstly Initial state is define, secondly reducers functions are implement to get the function of 'add,update,delete'

7.Add Slice Reducers to the Store
need to import reducer function from the slice and add to our store.js.
The string we create from the slicer 'TODO' add 'Reducer'. slice reducer function to handle to update all of the state
Vite installation:
To install Vite, run the following command in your terminal:

Code snippet
npm create vite@latest
Use code with caution. Learn more
This will create a new project called vite. Next, you will need to choose a project name, framework, and programming language. For this example, we will use the following:

Project name: redux-slider
Framework: React
Programming language: JavaScript
Create a boilerplate app:
Once you have chosen your project settings, Vite will create a boilerplate app for you. This app will contain a basic React application that you can use to test your Redux slider. To run the app, run the following command in your terminal:

Code snippet
npm install
npm run dev
Use code with caution. Learn more
This will start the Vite development server and open the app in your browser. You can now start adding your Redux slider to the app.

Install required packages:
To install the required packages for your Redux slider, run the following command in your terminal:

Code snippet
npm install react-redux react-icons redux-toolkit
Use code with caution. Learn more
Create a new file in src/app/store.js:
Next, you need to create a new file in src/app/store.js. This file will contain your Redux store. To create the store, import the configureStore function from Redux Toolkit and create an empty Redux store. Then, export the store.

Code snippet
import { configureStore } from "redux-toolkit";

const store = configureStore({
reducers: {},
});

export default store;
Use code with caution. Learn more
Provide Redux store to React:
Once you have created your Redux store, you need to provide it to React. To do this, wrap the App component in a Provider component and pass the store as a prop to the Provider component.

Code snippet
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
render() {
return (
<div>
<h1>Redux Slider</h1>
<Slider />
</div>
);
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
rootElement
);
Use code with caution. Learn more
Create a Redux slider:
To create a Redux slider, you need to create a new file in src/components/Slider.js. This file will contain your Redux slider component. To create the component, import the createSlice function from Redux Toolkit and create a slice with the following properties:

A string name to identify the slice
An initial state
One or more reducer functions to define the state to update
Code snippet
import { createSlice } from "redux-toolkit";

const todolistSlider = createSlice({
name: "TODO",
initialState: {
todos: [],
},
reducers: {
addTodo(state, action) {
state.todos.push(action.payload);
},
updateTodo(state, action) {
const todo = state.todos.find((t) => t.id === action.payload.id);
todo.text = action.payload.text;
},
deleteTodo(state, action) {
const index = state.todos.indexOf(action.payload);
state.todos.splice(index, 1);
},
},
});

export const { addTodo, updateTodo, deleteTodo } = todolistSlider.actions;
export default todolistSlider.reducer;
Use code with caution. Learn more
Add slice reducers to the store:
Finally, you need to add the slice reducers to the store. To do this, import the reducer functions from the slice and add them to the reducers object in the store.js file.

Code snippet
import { addTodo, updateTodo, deleteTodo } from "./components/Slider";

const store = configureStore({
reducers: {
TODO: addTodo,
updateTodo,
deleteTodo,
},
});
Use code with caution. Learn more
That's

Sources
velog.io/@munbeom/Laravel-React.JS%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EA%B4%80%EB%A6%AC%EC%9E%90-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0%EC%82%B0%EB%A7%8C%ED%95%A8-%EC%A3%BC%EC%9D%98
