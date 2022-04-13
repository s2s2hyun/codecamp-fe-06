import { useQuery, gql } from "@apollo/client";
import router from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;

export default function LoginSuccessPage() {
    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    const [accessToken] = useRecoilState(accessTokenState);

    useEffect(() => {
        if (!accessToken) {
            alert("어서!돌아가 로그인고고");
            router.push("22-01loginpage");
        }
    }, [accessToken]);

    return <div>캠프입장완료 환영해요</div>;
}
