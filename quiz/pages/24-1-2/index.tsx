import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

const Error = styled.div`
    color: red;
    font-size: 20px;
`;

const RegisterButton = styled.button`
    background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

const schema = yup.object({
    writer: yup
        .string()
        .max(5, "작성자는 최대 5자로 입력해주세요")
        .required("작성자는 필수 입력 사항입니다."),
    password: yup
        .string()
        .max(8, "비밀번호는 최대 8자리 입니다.")
        .required("비밀번호는 필수입력 사항입니다."),
    title: yup
        .string()
        .max(100, "제목은 최대 100자 입니다.")
        .required("비밀번호는 필수입력 사항입니다."),
    contents: yup.string().max(1000, "내용은 최대 1000자 입니다."),
});

interface IFormValues {
    writer?: string;
    title?: string;
    contents?: string;
    password?: string;
}

export default function ReactHookFormPage() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    //data 를 아래 넣어줄껀대 아래 mywirter , title ,contents 등이 들어가준다 handlesubmit 으로 감싸므로
    const onClickSubmit = (data: IFormValues) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            작성자:
            <input type="text" {...register("writer")} />
            <Error>{formState.errors.writer?.message}</Error>
            비밀번호
            <input type="password" {...register("password")} />
            <Error>{formState.errors.password?.message}</Error>
            제목: <input type="text" {...register("title")} />
            <Error>{formState.errors.title?.message}</Error>
            내용: <input type="text" {...register("contents")} />
            <Error>{formState.errors.contents?.message}</Error>
            {/* 내용: <input type="text" {...register("boardAddress.addressDetail")} /> */}
            <RegisterButton isActive={formState.isValid}>등록하기</RegisterButton>
        </form>
    );
}
