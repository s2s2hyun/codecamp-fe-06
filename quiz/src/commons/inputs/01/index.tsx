import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
    box-shadow: 0px 4px 15px orange;
    border: none;
    border-radius: 20px;
    margin: 10px;

    ::placeholder {
        color: orange;
        padding-left: 10px;
    }
`;

interface IProps {
    type: "text" | "password";
    register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
    return <Input type={props.type} {...props.register} placeholder="헬로우" />;
}
