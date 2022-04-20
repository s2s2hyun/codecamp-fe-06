import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  //data 를 아래 넣어줄껀대 아래 mywirter , title ,contents 등이 들어가준다 handlesubmit 으로 감싸므로
  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };
  console.log("리렌더링 체크");
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      {/* 내용: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button>등록하기</button>
    </form>
  );
}
