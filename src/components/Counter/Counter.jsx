import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className="counter">
            <h2>Counter</h2>
            <div className="counter-display">
                <span className="count-value">{state.count}</span>
            </div>
            <div className="counter-buttons">
                <button onClick={() => dispatch({ type: 'decrement' })} className="btn btn-decrement">
                    -
                </button>
                <button onClick={() => dispatch({ type: 'reset' })} className="btn btn-reset">
                    Reset
                </button>
                <button onClick={() => dispatch({ type: 'increment' })} className="btn btn-increment">
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;