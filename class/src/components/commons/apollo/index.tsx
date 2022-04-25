import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store/index";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [, setUserInfo] = useRecoilState(userInfoState);

  if (typeof window === "undefined") {
    console.log("여기는 브라우저");
  } else {
    console.log("여기는 프론트엔드 서버다 !!(yarn dev이다!!");
  }
  // 3. 세번째 방법으로 하고있습니다 현재는
  useEffect(() => {
    // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(mylocalstorageAccessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급 받아서 state 에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);
  // //////////////////////////////////////////////////////////////
  //  1. 여기는 이제 지원 하지 않음
  // if (process.browser){

  // }else{

  // }

  // 2. 프리렌더링시 문제되는 코드 !!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  // graphql  => rest api -> axios 로 받아들여진다 . apollo 가 없이 axios 로 날릴수있다.
  //

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1 - 1 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        //  1 - 2 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED) . 현재 다른 에러는 상관이 없는 곳이다 .
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2 - 1  refreshToken 으로 accessToken 을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2 - 2  재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // const accessToken = "새로운거";

            // 3 - 1 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authrization: `Bearer ${newAccessToken}`, // accessToken 만 바꿔치기
              },
            });
            // 3 - 2  opertation  재요청 하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  // accessToken 을 Recoil 스테트로 해서 21-01-login에서 사용하면된다.

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
