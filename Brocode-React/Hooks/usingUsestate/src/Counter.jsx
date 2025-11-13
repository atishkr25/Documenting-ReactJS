import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const increametCount = () => {
        setCount(count+1);
    }
    const dicreametCount = () => {
        setCount(count-1);
    }
    const resetCount = () => {
        setCount(0);
    }

    return(
        <>
            <div className="Counter-container">
                <p className="Count-disply">{count}</p>
                <button className="btn" onClick={dicreametCount}>Decreament</button>
                <button className="btn" onClick={resetCount}>Reset</button>
                <button className="btn" onClick={increametCount}>Increament</button>
            </div>
        </>
    )
}
export default Counter;