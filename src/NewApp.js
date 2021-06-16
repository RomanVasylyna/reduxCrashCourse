import React from 'react';
import './App.css';
import { favPetIncrement, favPetDecrement } from './actions';

// Allows you to extract data from the Redux store state, using a selector function.
import { useSelector, useDispatch } from 'react-redux';

function NewApp() {

    const petCounter = useSelector(state => state.petCounter);
    const petFavourite = useSelector(state => state.petFavourite);

    const dispatch = useDispatch();


    const btnStyle = {
        background: 'gray',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '5px'
    };



    return (
        <div className="App">
            <h1>New Component Add Favourite Pet</h1>
            <h1>Pet counter : {petCounter}</h1>
            <h1>Favourite Pets : {petFavourite}</h1>
            <button style={btnStyle} onClick={() => dispatch(favPetIncrement())}>Add Pet</button>
            <button style={btnStyle} onClick={() => dispatch(favPetDecrement())}>Remove Pet</button>
        </div>
    );
}

export default NewApp;
