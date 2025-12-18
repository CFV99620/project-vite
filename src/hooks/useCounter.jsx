import { useState } from "react";

function useCounter(initialValue = 0) { // Esto es un custom hook llamado useCounter que maneja la lógica de un contador. el hook maneja la lógica del contador y proporciona funciones para incrementarlo, decrementarlo y resetearlo.
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prevCount => prevCount + 1);// esto crea una función llamada increment que incrementa el valor del contador en 1.
    const decrement = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };// Retorna el valor actual del contador y las funciones para modificarlo.
}

export default useCounter;// Exporta el custom hook para que pueda ser utilizado en otros componentes.