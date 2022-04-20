// 1.문자 타입

const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

//
//
// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};

const result2 = getNumber(8);

//
//
// 3. any 타입
const getAny = (arg: any): any => {
  return arg;
};
const result3_1 = getAny("테이저건");
const result3_2 = getAny(10);
const result3_3 = getAny(true);

//
//
//
// 4. any 타입 2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result4 = getAnys("상수", "부산진구초등학교", 40);

//
//
// 5. generic 타입

// getGeneric  들어온 타입을 그대로 사용 리턴타입도 똑같이 MyType 으로 나온다.
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}

const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;
const result5_1 = getGeneric(aaa);
const result5_2 = getGeneric(bbb);
const result5_3 = getGeneric(ccc);

//
//
//
// 6. generic 타입2
// prettier-ignore
function getGenerics<MyType1,MyType2,MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3,MyType2,MyType1] {
  return [arg3, arg2, arg1];
}

const result6 = getGenerics("철수", "구로초등학교", 8);
// "정상수" 는 MyType 1에서 Stirng으로 받아오게된다. result6 에 마우스를 가져다 놓으면 결과값이 뭐가 나오는지 string / number / 뭐가나오는지 타입을 예측이 가능하다.

// 7. generic 축약1
// prettier-ignore
function getGenericsT<T1,T2,T3>(arg1:T1, arg2: T2, arg3: T3): [T3,T2,T1] {
  return [arg3, arg2, arg1];
}

const result7 = getGenericsT("T1Faker", "MSi우승기원", 3);

// 8. generic 축약2
// prettier-ignore
function getGenericsTYU<T,Y,U>(arg1:T, arg2: Y, arg3:U): [U,Y,T] {
  return [arg3, arg2, arg1];
}
// prettier-ignore
const result8 = getGenericsTYU<string,string,number>("T1Faker", "MSi우승기원", 3);

// 9 .useState 에서의 generic
// const [school,setSchool]=useState<string>("Msi우승기원")

// const apple: number = "철수"
// console.log(apple)

// 10. 화살표함수의 generic!!!

// const aaa = <T>(arg:T): T =>{

// }

// function getGenericsTYU = <T,Y,U>(arg1:T, arg2: Y, arg3:U): [U,Y,T] =>  {
//   return [arg3, arg2, arg1];
// }
