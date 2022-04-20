import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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
    // 1. 로그인 하기

    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;

    // 2. 유저 정보 받아오기(14일 수업내용 query )
    //

    // 3. 글로벌스테이트 저장하기
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);

    // 4. 로그인 성공페이지로 이동하기
    alert("로그인에 성공하였습니다!!.");
    router.push("/23-05-login-check-success");
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
