import { useState } from 'react'

export default function CounterStatePage(){
        const [ count, setCount ] = useState(0)
//  react 에서는 let count = 0 으로 설정후 
        function counter(){
            setCount(count + 1)
// count = count +1 
// console.log(count) 로 설정하면은 화면상으론 숫자가 늘어나진 않지만 콘솔창에서 확인하면 보인다.
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </div>
    )

}