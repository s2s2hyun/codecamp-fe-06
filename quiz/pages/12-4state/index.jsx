import { useState } from "react";

export default function PrevstatePage() {
    const [state, setState] = useState(0);

    function sumAll() {
        setState((prev) => prev + 1);
        setState((prev) => prev + 2);
        setState((prev) => prev + 3);
        setState((prev) => prev + 4);
    }

    return (
        <>
            <div>결과는: {state}</div>
            <button onClick={sumAll}>실행!</button>
        </>
    );
}
