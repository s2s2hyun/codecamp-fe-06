import FunctionalComponentChildPage from "../21-02-functional-component-child/index";

export default function FunctionalComponentParentPage() {
  //   return <FunctionalComponentChildPage count={123} />;
  return <> {FunctionalComponentChildPage({ count: 123 })}</>;
}

// 함수형 컴퍼넌트를 통해서 알수있는것은 아 그냥 이것도 그냥 함수구나
// props 부분 aaa bbb  qqq 로 해도 받는 매개변수이다 .
