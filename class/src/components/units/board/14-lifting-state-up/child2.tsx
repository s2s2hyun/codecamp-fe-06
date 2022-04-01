export default function Child2(props) {
  return (
    <div>
      <div>자식 2의 카운트 : {props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 세기 </button>
    </div>
  );
}
