// import axios from 'axios'
import { useMutation,gql } from '@apollo/client'
import {useState} from 'react'

const CREATE_BOARD = gql`
mutation{
    createBoard(
        writer: "동현",
        title: "안녕",
        contents: "컨텐츠"
        ){
            message
        }
}
`

export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

   const callGraphqlApi =  async () => {
        //  const result = await axios.get("https://koreanjson.com/posts/1") // rest -api 방식 
        //  const result = await callApi() graphql -api 방식 
        const result = await callApi()    
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
            // console.log(result.data.title)
            // setData(result.data.title)
    }


    
    return(
        <>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>G-API 요청하기!!!</button>
        </>
    )

}