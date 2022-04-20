// @ts-ignore
import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuth = (Component) => (props) => {
  const router = useRouter();

  // 권한분기 로직 추가 하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("돌아가로그인해와");
      router.push("/23-04-login-check");
    }
  }, []);

  return <Component {...props} />;
};
