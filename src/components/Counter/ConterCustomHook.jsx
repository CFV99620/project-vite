import React from 'react';
import useCounter from '../../hooks/useCounter.jsx';//importa el custom hook useCounter

const CounterCustomHook = () => {

    const { count, increment, decrement, reset } = useCounter(0);//utiliza el custom hook useCounter para obtener el estado del contador y las funciones para modificarlo

    return (
        <div className="counter">
            <h2>Counter with Custom Hook</h2>
            <div className="counter-display">{count}</div>
            <button onClick={increment}>Increment</button>{/* Botón para incrementar el contador, hace uso del custom hook useCounter llamando a la función increment */}
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CounterCustomHook;