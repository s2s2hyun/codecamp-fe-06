import styled from "@emotion/styled";

interface IPropsRegisterButton {
    isActive: boolean;
}

const RegisterButton = styled.button`
    background-color: ${(props: IPropsRegisterButton) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props) {
    return <RegisterButton isActive={props.isActive}>{props.title}</RegisterButton>;
}
