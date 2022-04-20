// 1. any 타입 ( 그냥 자바스크립트랑 같음 ) result1 에 마우스를 올려놔도 뭔값인지 알수가 도통 모른다

const getAny = (args: any) => {
  return args + 2;
};
const result1 = getAny("철수");

// 2. unknown 타입 >> 가급적이면 any 보단 unknown 이 더 좋다  result 2에 마우스를 올려놓으면 타입이 뭔지 나오게 된다 .
//  (개발자에게 안전하게 코딩하도록 유도!!) 코드량은 늘어날수밖에 없긴한대 안전한게 최고!

const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요!!! ";
  }
};

const result2 = getUnknown("철수");

// if( result2 === "숫자를 넣어주세요!!! " )
