import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <div>
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켙으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  );
}

// 글로벌 스테이트를 넣고서 마지막 기록을 따라서 갈수있다 . 갑자기 뭐 이용중에 가입을 해야되는 상황이다 가입을 하고 이전에 이용했던 페이지 복구하려면
// 글로벌 스테이트에 담아둔다 .
