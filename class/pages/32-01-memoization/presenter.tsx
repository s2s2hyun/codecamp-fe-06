import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 됩니다.");
  return (
    <div>
      <div> ==================================</div>
      <h1>이것은 프레젠터 입니다.</h1>
      <div> ==================================</div>
    </div>
  );
}

export default memo(MemoizationPresenterPage);

// memo 도 하이오브 컴포넌트라 부를수있다.
// Memo 를 남발하게 되면 퍼포먼스가 좀 떨어지게된다 .
// 정말 필요한곳에서만 사용되기만 바란다.
