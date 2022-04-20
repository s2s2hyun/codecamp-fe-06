import { useState } from "react";
import { useMutation, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

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
    console.log(accessToken);

    // 2. 유저 정보 받아오기(14일 수업내용 query )
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 3. 글로벌스테이트 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // 4. 로그인 성공페이지로 이동하기
    alert("로그인에 성공하였습니다!!.");
    router.push("/24-02-login-use-apollo-success");
  };

  // return (
  //   <div>
  //     <form onSubmit={}>
  //       이메일:
  //       <input type="text" onChange={onChangeEmail} />
  //       <br />
  //       비밀번호:
  //       <input type="password" onChange={onChangePassword} />
  //       <br />
  //       <button onClick={onClickLogin}>로그인</button>
  //       <button type="submit">등록하기</button>
  //       <button type="button" onClick={}>
  //         블랙보리
  //       </button>
  //       {/* 버튼만든다고 하면 버튼의 타입을 만들어줘야한다 . button 의 타입 default
  //     값은 submit 임. 그래서 아래 로그인 하기 버튼을 누르면 form 의 onsubmit
  //     도 실행되고 onclick 에 바인딩  된 함수 도 실행됨. onclick 을 사용한다면
  //     버튼 타입을 타입 버튼으로 지칭할것 !  onsubmit 이 dafault다. */}
  //       <button type="reset">초기화</button>
  //     </form>
  //   </div>
  // );

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}

// {
//  "Authorization":"Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU0ZWNhNWE4MjU1YjAwMjk4ODZhYzciLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2NDk3MzI3ODIsImV4cCI6MTY0OTczNjM4Miwic3ViIjoiYWNjZXNzVG9rZW4ifQ.TwrAekp7DDCx43n5zj47HP5QQQgEEwvCVFzoL93sS916ag5C6RSqG0HVR0vOinlgVrgWDcppEocm3BKS5m_LHg"
// }
