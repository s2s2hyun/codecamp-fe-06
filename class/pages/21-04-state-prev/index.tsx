import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCounter = () => {
    // 1. 화살표함수
    // setCount((prev) => prev + 1);

    // 2. 함수 선언식
    // setCount(function (prev) {
    // 로직 추가 가능
    // if () 등       >>1) 휴대폰 번호가 맞는지 확인하는 방식 ( 010 -1234-5678 ) 하려고 하면 if / for 를 하려면 복잡해질수도 있습니다.
    // for() 등       >>2) 어떻게 하면 효율적으로 할지 정규표현식을 사용하게 되면 굉장히 쉽게 깔끔하게 할수있다.
    //   return prev + 1;
    // });

    // 3. 매개변수 바꿔보기 >> olaf 로 변경
    setCount((olaf) => olaf + 1);
  };

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>Click증가!!!</button>
    </div>
  );
}
