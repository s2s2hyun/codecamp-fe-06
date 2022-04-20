import { useRouter } from "next/router";
import { useEffect } from "react";

// useRouter / useEffect 등이 쓰여져있는게 보이면 use 를 사용해야구나 파악

export function useAuth() {
  const router = useRouter();

  // 권한분기 로직 추가 하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("돌아가로그인해와");
      router.push("/23-04-login-check");
    }
  }, []);

  //   return {
  //     isLoading,
  //   };
}
