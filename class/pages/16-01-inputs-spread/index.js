// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
// const profile = {
//     name: "철수"
//     age: 13,
//     school : "다람쥐초등학교"
// }

// const profile2 = {
//     ...profile
//     // name:profile.name,
//     // age:profile.age,
//     // school:profile.school
// }

export default function GraphqlMutationPage() {
  // const [myWriter,setMyWriter]  = useState("")
  // const [myTitle,setMyTitle]  = useState("")
  // const [myContents,setMyContents]  = useState("")

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    //   const result = await axios.get("https://koreanjson.com/posts/1") // rest -api 방식
    //  const result = await callApi() graphql -api 방식
    const result = await createBoard({
      variables: { ...inputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
    // console.log(result.data.title)
    // setData(result.data.title)
  };
  const onChangeInputs = (event) => {
    setInputs({
      [event.target.id]: event.target.value,
      ...inputs,
    });
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자:
      <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목:
      <input type="text" id="title" onChange={onChangeInputs} />;<br />
      내용:
      <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>G-API 요청하기!!!</button>
    </div>
  );
}
