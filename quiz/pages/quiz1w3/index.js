export default function ChangeDocumentQuiz1w3(){
    function ChangeWord(){
        const result = "Word"
        document.getElementById("change").innerText = "수고하세용"
    }
    return(
        <div>
            <button id="change" onClick={ChangeWord}>안녕하세요.</button>
        </div>
            
    )
}


// let 과 document.getElementByid() 를 사용하라고 했는데 
    