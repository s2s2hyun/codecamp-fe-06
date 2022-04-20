// 1. HOF - 일반타입
function firstFunc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const result1 = firstFunc1("영희")(8);
// result1 에 마우스 올려보면 string, number 로 표기가 되어져 나온다.

//
//
// 2. HOF - any 타입
function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const result2 = firstFunc2("철수")(8);

// result1 에 마우스를 올려보면 any 라고 나와서 뭐가 뭔지 모른다

//
//
// 3.  HOF- generic 타입
function firstFunc3<T>(arg1: T) {
  return function secondFunc3<Y>(arg2: Y): [T, Y] {
    return [arg1, arg2];
  };
}

const result3 = firstFunc3(8)("영희");

//
//
// 4.  HOF- generic 타입 > 화살표함수
// prettier-ignore
const firstFunc4 = <T>(arg1: T) => <Y>(arg2: Y): [T, Y] => {
      return [arg1, arg2];
    };

const result4 = firstFunc4(8)("영희");

//
//
// 5.  HOF- generic 타입 >(컴포넌트의 응용해보기 HOC)
// prettier-ignore
const withAuth = <T>(Component: T) => <P>(props: P): [T, P] => {
    return [Component, props];
  };

const result5 = withAuth("Bbb")({ aaa: "철수" });
