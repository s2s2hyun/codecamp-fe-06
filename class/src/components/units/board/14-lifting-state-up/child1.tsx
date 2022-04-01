import { useState } from "react";

export default function Child1(props) {
  const aaa = () => {
    props.setCount((prev) => prev + 1);
  };
  // 위에 완료후 부모가 작동이 된다 .
  return (
    <div>
      <div>자식 1의 카운트 : {props.count}</div>
      <button onClick={aaa}>카운트올리기 </button>
    </div>
  );
}
