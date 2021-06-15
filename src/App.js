import React from 'react';
import './App.css';
import { petIncrement, petDecrement } from './actions';

// Allows you to extract data from the Redux store state, using a selector function.
import { useSelector, useDispatch } from 'react-redux';

function App() {

const petCounter = useSelector(state => state.petCounter);
const petFavourite = useSelector(state => state.petFavourite);

const dispatch = useDispatch();


const btnStyle = {
background: 'gray',
color:'#fff',
padding: '10px 20px',
borderRadius: '5px',
cursor: 'pointer',
marginRight: '5px'
};

  return (
    <div className="App">
    <h1>Pet counter : {petCounter}</h1>
    <h1>Favourite Pets : {petFavourite}</h1>
    <button style={btnStyle} onClick={() => dispatch(petIncrement())}>Add Pet</button>
    <button style={btnStyle} onClick={() => dispatch(petDecrement())}>Remove Pet</button>
    </div>
  );
}

export default App;
