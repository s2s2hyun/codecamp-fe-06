import { useMutation, gql } from '@apollo/client'
import {useState } from 'react'


    const CREATE_BOARD =gql`
    mutation {
        createBoard(
            writer:"동현"
            title:"자고싶어요"
            contents:"하드코딩하고싶어요 초보코딩이에요"
        ){  
        message
        }
    }
`


export default function GraphqlMutationPage (){
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {
        const result = await callApi()
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.msessage)
    }

        return(
            <>
                <div>{data}</div>
                <button onClick={callGraphqlApi}> GRAPHQLMUTATION-API 요청하기 </button>
            </>
        )


}