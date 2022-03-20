import { useState } from 'react'

export default function Token() {
    const [ token, setToken ] = useState("000000")

        function GetToken() {
            setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
        }
    return(
        <div>
            <div>{token}</div>
            <button onClick={GetToken}>인증번호</button>
        </div>
            
    )
}