import { useState } from 'react'

export default function ChangeStateQuiz(){
    const [ word,setWord ] = useState ("안녕하세요")

        function ChangeWord() { 
            setWord ("반갑습니다")
        }
    return(
        <button onClick={ChangeWord}>{word}</button>
    )
}
