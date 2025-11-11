import { useState } from "react";

const Text = () => {

    const [count, setCount] = useState(0);

    return (
        
        <div>
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => count > 0 ? setCount(count - 1) : null}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Text;