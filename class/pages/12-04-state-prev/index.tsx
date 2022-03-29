import { useState } from "react";

export default function statePrevPage() {
  const [count, setCount] = useState(0);

  const onClickcount = () => {
    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>현재카운트 : {count} </div>
      <button onClick={onClickcount}>카운트올리기!!!</button>
    </div>
  );
}

//setstate 임시 저장소가 있다 .
//prev 를 통해서 저장소에 데이터를 계속 업데이트 시켜준다
//그이후 아래 {count}의 값은 1이 아닌 4로 변경된다.
