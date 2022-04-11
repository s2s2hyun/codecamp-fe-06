import { useState } from "react";

export default function StatePrevPage() {
    const [count, setCount] = useState(0);
    const onClickCounter = () => {
        setCount((qwer) => qwer + 1);
    };

    return (
        <div>
            <div>현재카운트: {count}</div>
            <button onClick={onClickCounter}>Click증가!!!</button>
        </div>
    );
}
