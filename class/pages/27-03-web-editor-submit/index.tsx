// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const router = useRouter();

  const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
      createBoard(createBoardInput: $createBoardInput) {
        _id
        writer
        contents
      }
    }
  `;

  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);
    // onChangeContents = >  event 가 아닌 value

    setValue("contents", value === "<p><br></p>" ? "" : value);
    // register 로 등록하지 않고 , 강제로 값을 넣어주는 기능 setvalue
    // value === "<p><br></p>" ? "" : value  <p><br></p> 콘솔에 보이게 되면 빈값으로 바꿔줘 ""

    trigger("contents");
    // 컨텐츠라는 키가 방아쇠가 당겨진다 . onChange 가 됐다고  react-hook-form 에 알려주는 기능
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      // mutation
      alert("모두 입력해주세요 ");
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
