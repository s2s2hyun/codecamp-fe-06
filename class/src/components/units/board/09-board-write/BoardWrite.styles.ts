import styled from "@emotion/styled";

interface ISubmitButtonProps {
    isActive: boolean;
}

export const SubmitButton = styled.button`
    background-color: ${(props: ISubmitButtonProps) => (props.isActive ? "yellow" : "none")};
`;

export const WriterInput = styled.input`
    border-color: green;
`;
