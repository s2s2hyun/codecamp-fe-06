import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm();

  formState.isSubmitting;
  // data 를 아래 넣어줄껀대 아래 mywirter , title ,contents 등이 들어가준다 handlesubmit 으로 감싸므로
  const onClickSubmit = (data: IFormValues) => {
    console.log(data);

    try {
    } catch (error) {
      sentry.send(error);
    }
  };

  console.log("리렌더링 체크");
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      {/* 내용: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}

// 등록하기 버튼을 여러번 누르면 데이터가 여러번 넘어가게 되어서  게시글 보게되면 중복으로 여러개 올라가는걸 볼수있었다.
// 버튼이 두번이상 눌리면 안된다. disabled={formState.isSubmitting}
