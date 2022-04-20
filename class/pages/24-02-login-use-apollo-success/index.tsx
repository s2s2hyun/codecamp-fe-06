import { useQuery, gql } from "@apollo/client";
import { WithAuth } from "../../src/components/commons/hocs/withAuth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
// import router, { useRouter } from "next/router";
// import { useEffect } from "react";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

function LoginSuccessPage() {
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);(14일 수업에 주석처리)
  const [userInfo] = useRecoilState(userInfoState);
  // const router = useRouter();
  // 로그인이 필요한 페이지에 useEffect{} 전부 복사해서 줘야한다
  // 복사붙여넣기는 수정시 문제가 크게 된다 .
  // 수정후 하나하나 전부다 변경해줘야한다.
  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("돌아가로그인해와");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{userInfo.name}님 환영합니다</div>;
}

export default WithAuth(LoginSuccessPage);
