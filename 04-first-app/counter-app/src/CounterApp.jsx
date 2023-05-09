// functional component
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({value}) => {
    //add state to handle value
    const [counter, setCounter] = useState({
        counter1: value
    });
    
    const reset = () => {
        setCounter({
            ...counter,
            counter1: value
        });
    }

    const handleClick = (e) => {
        e.preventDefault();

        if(e.target.textContent === '-1'){
            setCounter({
                ...counter,
                counter1: counter.counter1 - 1
            });
            return;
        } 
        setCounter({
            ...counter,
            counter1: counter.counter1 + 1
        });

        return;
        
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter.counter1}</h2>
            <button onClick={handleClick}>-1</button>
            <button aria-label='reset' onClick={reset}>reset</button>
            <button onClick={handleClick}>+1</button>
        </>
    );
}



CounterApp.propTypes = {
    value: PropTypes.number
}
CounterApp.defaultProps = {
    value: 0
}