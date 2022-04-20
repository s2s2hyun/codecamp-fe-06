import { useAuth } from "../../src/components/commons/hooks/useAuth";

function CustomHooksUseAuthPage() {
  useAuth();

  return <div>철수의 프로필 페이지 입니다 .!!!</div>;
}

export default CustomHooksUseAuthPage;

// 로그인 한 사람만 입장해서 볼수있는 페이지가 된다 .
//  export default 가 빠졌다 위에 function CustomHooksUseAuthPage
// 본질은 함수이다 .
