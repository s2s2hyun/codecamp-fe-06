import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

export default function ApolloSetting(props): JSX.Element {
    const [accessToken] = useRecoilState(accessTokenState);

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
