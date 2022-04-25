import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store/index";
import styled from "@emotion/styled";

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;

export default function LoginPage() {
    const [, setAccessToken] = useRecoilState(accessTokenState);
    const [email, setEmail] = useState("");
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [loginUser] = useMutation(LOGIN_USER);

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const onClickLogin = async () => {
        const result = await loginUser({
            variables: {
                email,
                password,
            },
        });
        const accessToken = result.data.loginUser.accessToken;
        setAccessToken(accessToken);
        console.log(accessToken);
        alert("로그인에 성공하였습니다!!.");

        {
            router.push("/quiz-06/payment/loading");
        }
    };

    return (
        <div>
            이메일:
            <Input type="text" onChange={onChangeEmail} />
            <br />
            Password:
            <Input type="password" onChange={onChangePassword} />
            <br />
            <Button onClick={onClickLogin}>로그인</Button>
        </div>
    );
}

const Input = styled.input`
    box-shadow: 0px 4px 15px red;
    border: none;
    border-radius: 20px;
    margin: 10px;
`;

const Button = styled.button`
    width: 120px;
    height: 120px;
    background: yellow;
    /* #E5E5E5_border */
    border: 1px dashed #e5e5e5;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    margin-right: 10px;
    padding: 0;
`;
