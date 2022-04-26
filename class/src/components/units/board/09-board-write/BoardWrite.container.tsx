// 여기는 컨테이너 컴포넌트
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  // const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = async () => {
    interface IMyVariables {
      number: number;
      writer?: string;
      title?: string;
      contents?: string;
    }

    const myVariables: IMyVariables = { number: Number(router.query.mynumber) };

    if (myWriter !== "") myVariables.writer = myWriter;
    if (myTitle !== "") myVariables.title = myTitle;
    if (myContents !== "") myVariables.contents = myContents;

    await updateBoard({
      variables: myVariables,
    });
    alert("게시글 수정에 성공하였습니다!!!");
    router.push(`/09-01-boards/${router.query.mynumber}`);
  };

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식!!
    // const result = await axios.get("https://koreanjson.com/users/1")
    // const result = await axios.get("https://koreanjson.com/products/1")

    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    }); // graphql-api 방식
    // console.log(result)
    // console.log(result.data.createBoard.message)
    // setData(result.data.createBoard.message)
    alert("게시글 등록에 성공하였습니다!!!");
    console.log(result);
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);

    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);

    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);

    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
