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
