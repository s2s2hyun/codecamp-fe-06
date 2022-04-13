import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store/index";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  if (typeof window === "undefined") {
    console.log("여기는 브라우저");
  } else {
    console.log("여기는 프론트엔드 서버다 !!(yarn dev이다!!");
  }
  // 3. 세번째 방법으로 하고있습니다 현재는
  useEffect(() => {
    const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(mylocalstorageAccessToken || "");
  }, []);
  // //////////////////////////////////////////////////////////////
  //  1. 여기는 이제 지원 하지 않음
  // if (process.browser){

  // }else{

  // }

  // 2. 프리렌더링시 문제되는 코드 !!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  // accessToken 을 Recoil 스테트로 해서 21-01-login에서 사용하면된다.

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
