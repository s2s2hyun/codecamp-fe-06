import { useState } from "react";
import Child1 from "../../src/components/units/board/14-lifting-state-up/child1";
import Child2 from "../../src/components/units/board/14-lifting-state-up/child2";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <div>===============================개꿀</div>
      <Child2 count={count} onClick={onClickCountUp} />
    </div>
  );
}
