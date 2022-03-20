import { useMutation, gql } from '@apollo/client'
import {useState } from 'react'


const CREATE_BOARD =gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {  
        createBoard(writer: $writer,title: $title,contents: $contents){
        _id
        message
        number
        }
    }
`


export default function GraphqlMutationPage (){

    
    const [myWriter,setMyWriter] = useState("")
    const [myTitle,setMyTitle] = useState("")
    const [myContents,setMyContetns] = useState("")



    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {

        const result = await callApi({
            
            variable:{ writer:myWriter,title:myTitle,contents:myContents }
        })

        
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.msessage)
    }
        const onChangeWriter = (event) =>{
            console.log(event.target.value)
            setMyWriter(event.target.value)
        }

        const onChangeTitle = (event) =>{
            console.log(event.target.value)
            setMyTitle(event.target.value)
        }
        
        const onChangeContents = (event) =>{
            console.log(event.target.value)
            setMyContetns(event.target.value)

        }

        return(
            <div>
                작성자:<input type="text" onChange={onChangeWriter} /><br/>
                제목:<input type="text" onChange={onChangeTitle} />;<br/>
                내용:<input type="text" onChange={onChangeContents} /><br/>

                <button onClick={callGraphqlApi}> GRAPHQLMUTATION-API 요청하기 </button>
            </div>
        )


}