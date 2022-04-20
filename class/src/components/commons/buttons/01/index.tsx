import styled from "@emotion/styled";

interface IPropsLoginButton {
  isActive: boolean;
}

const Button = styled.button`
  background-color: ${(props: IPropsLoginButton) =>
    props.isActive ? "yellow" : ""};
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
