import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// Redux parts :
// 1. Store - global state that can be accessed from everywhere in the app

// 2. Action - defines the action to be made
// it checks which action is called and store will be modified accordingly

// Increase number of pets
const petIncrement = () => {
  return {
    type: "PET_INCREASED"
  }
}

const petDecrement = () => {
  return {
    type: "PET_DECREASED"
  }
}

// 3. Reducer - condition that changes an action from one state to another
const petCounter = (state=0, action) => {
  switch (action.type) {
    case "PET_INCREASED":
      return state + 1;
    case "PET_DECREASED":
      return state - 1;
    default:
      return state;
  }
}


let store = createStore(petCounter); // Create a store with reducer as a param
store.subscribe(() => console.log(store.getState()));


// 4. Dispatch - changes store via reducer
store.dispatch(petIncrement());
store.dispatch(petIncrement());
store.dispatch(petDecrement());



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
