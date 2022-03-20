export default function Token() {
    function GetToken(){
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("number").innerText = token        
    }

    return(
        <div>
            <div id="number">000000</div>
            <button onClick={GetToken}>인증번호</button>
        </div>
    )
}