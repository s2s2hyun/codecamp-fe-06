// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
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

  return (
    <div>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
