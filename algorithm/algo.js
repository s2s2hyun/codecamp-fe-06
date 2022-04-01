// 31일날 배운거// function solution(numbers) {
//    const answer = [];
//     for(let i = 0; i < numbers.length; i++){
//         for(let l = i + 1 ; l< numbers.length; l++){
//         const sum = numbers[i] + numbers[l];

//             if(answer.includes(sum) === false ){
//                 answer.push(sum);
//             }
//                     }
//     }
//     return answer.sort((a,b) => a-b);
// }

//Set 문법

//1. 고유한 데이터만 받아올수 있다. ( 중복되지 않는 데이터만 가져올수있다.)
//2. 겉은 배열 형태 이지만 ,타입은 객체형태
//ex ) new
//  1. 뒤에 들어오는 데이터를 새로운 객체 형태로 리턴
//

const arr = new Set();

arr.add(1);
// arr.add(2)
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// set => 배열로 변환
// 1. Array.from
const result = Array.from(arr);
Array.isArray(result);

//2. spread
const answer = [...arr];
answer;
Arr.isArray;

// 데이터 추가
// 1.겉은 배열 형체이지만 안근 객체형태이다.
//배열에 맨 뒤에 넣는 단어 push
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 데이터 조회
arr.has(1); // true 값 리턴
arr.has(3); // false 값 리턴
// 데이터 삭제
arr.delete(1); // true값 리턴
arr; // 1제거 되고 2만 남았다.
arr.delete(3); // 3은 삭제 x 값이 없어서

// 데이터 초기화
arr.clear(); // 초기화
arr; // 값 확인 했는데 아무것도 없다 .
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//set 은 중복은 생략한다
//데이터 반복 =>
arr.forEach((el) => {
    console.log(el);
});
