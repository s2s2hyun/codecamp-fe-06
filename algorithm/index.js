// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false

function solution(s) {
    //     문자열 전체로 소문자로 변경 -> 소문자만 검증
    s = s.toLowerCase();
    // 문자열 전체를 대문자로 변경 - > 대문자만 검증
    s = s.toUpperCase();

    let p = 0;
    let y = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") {
            p++;
        } else if (s[i] === "y" || s[i] === "Y") {
            y++;
        }
    }
    return p === y;
}

same;

function solution(s) {
    //  p와 y의 갯수를 저장하는 객체
    const check = {};
    s.toLowercase(); //소문자로 변환하고
    s.split("") // 배열로 변환
        .forEach((str) => {
            // 배열 메서드인 forEach 사용
            check[str] === undefined //객체에 해당키값이 없는지 검증
                ? (check[str] = 1) //없다면 초기값 1로 지정
                : check[str]++; //있다면 기존 값에 1을 더한다.
        });
    return check.p === check.y;
}

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
