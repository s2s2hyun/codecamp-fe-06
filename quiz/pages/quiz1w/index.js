import { useState } from 'react'

export default function counterStateQuiz(){
    const [ count, setCount ] = useState(0)
    function counter(){
        setCount(count + 1)
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={counter}>카운트야 올라가라!!</button>
        </div>
    )
}