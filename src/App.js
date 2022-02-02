import React from 'react';
import {useReducer} from "react";

import './App.css';

const reducer = (state, action) => {
    state = {...state, count3: state.count3 + 1}
switch (action.type) {
    case "inc" :
        return {...state, count1: state.count1 + 1, count2: (state.count2+(9/5)) }
    case  "dec" :
        return {...state, state, count1: state.count1 - 1, count2: (state.count2-(9/5)) }
    case "reset":
        return {...state, count1: action.payload, count2: 32 }
    default:
        throw new Error('CountError')
    }
};
function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 32, count3: 0});

    return (
        <div className="App-temp">
            <h3>ВІДРЕГУЛЮЙТЕ ТЕМПЕРАТУРУ:</h3>
            <div>°С: {state.count1}</div>
            <div>°F: {state.count2}</div>
            <div>CLicks: {state.count3}</div>
            <button onClick={() => dispatch({type: "inc"})}>+</button>
            <button onClick={() => dispatch({type: "dec"})}>-</button>
            <button onClick={() => dispatch({type: "reset", payload: 0})}>Reset</button>
        </div>
    );
}

export default App;