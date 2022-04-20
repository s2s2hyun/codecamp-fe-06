// @ts-ignore
import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuth = (Component) => (props) => {
    const router = useRouter();

    // 권한분기 로직 추가 하기
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            alert("알고리즘 빵쩜맞고 어딜 건너뛰냐 로그인해랑");
            router.push("/example/hoc/login");
        }
    }, []);

    return <Component {...props} />;
};
