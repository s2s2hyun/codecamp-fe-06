import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Button01 from "../../src/commons/buttons/01";
import Input01 from "../../src/commons/inputs/01";

const Error = styled.div`
    color: red;
    font-size: 20px;
`;

// const RegisterButton = styled.button`(이동)
//     background-color: ${(props) => (props.isActive ? "yellow" : "")};
// `;

const schema = yup.object({
    writer: yup
        .string()
        .max(5, "작성자는 최대 5자로 입력해주세요")
        .required("작성자는 필수 입력 사항입니다."),
    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "대문자,특수문자포함최대8자"
        )
        .required("비밀번호는 필수입력 사항입니다."),

    title: yup
        .string()
        .max(100, "제목은 최대 100자 입니다.")
        .required("비밀번호는 필수입력 사항입니다."),
    contents: yup.string().max(100, "내용은 최대 1000자 입니다."),
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
    console.log("리렌더링 체크");
    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            {/* 작성자:
            <input type="text" {...register("writer")} /> */}
            작성자 : <Input01 type="text" register={register("writer")} />
            <Error>{formState.errors.writer?.message}</Error>
            {/* 비밀번호
            <input type="password" {...register("password")} /> */}
            비밀번호 : <Input01 type="password" register={register("password")} />
            <Error>{formState.errors.password?.message}</Error>
            {/* 제목: <input type="text" {...register("title")} /> */}
            제목 : <Input01 type="text" register={register("title")} />
            <Error>{formState.errors.title?.message}</Error>
            {/* 내용: <input type="text" {...register("contents")} /> */}
            내용 : <Input01 type="text" register={register("contents")} />
            <Error>{formState.errors.contents?.message}</Error>
            {/* 내용: <input type="text" {...register("boardAddress.addressDetail")} /> */}
            <Button01 isActive={formState.isValid} title="등록하기"></Button01>
        </form>
    );
}
