import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

// 토큰 만료시간 5초

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPasswrod(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    setAccessToken(accessToken);
    console.log(accessToken);
    alert("로그인에 성공하였습니다!!.");
    router.push("30-02-login-success");
  };

  return (
    <div>
      이메일:
      <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}

// {
//  "Authorization":"Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU0ZWNhNWE4MjU1YjAwMjk4ODZhYzciLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2NDk3MzI3ODIsImV4cCI6MTY0OTczNjM4Miwic3ViIjoiYWNjZXNzVG9rZW4ifQ.TwrAekp7DDCx43n5zj47HP5QQQgEEwvCVFzoL93sS916ag5C6RSqG0HVR0vOinlgVrgWDcppEocm3BKS5m_LHg"
// }
