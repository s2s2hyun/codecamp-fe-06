const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
];

classmates.filter((data) => data.school === "토끼초등학교").map((data) => ({ ...data, candy: 10 }));

// // [ 보너스 -1) 1 ."토끼초등학교"만 골라낸후 , candy:10개씩 각각 추가해주세요 .
// [
//     {
//       name: '철수',
//       age: 10,
//       school: '토끼초등학교',
//       candy: 10
//     },
//     {
//       name: '훈이',
//       age: 11,
//       school: '토끼초등학교',
//       candy: 10
//     }
//   ]
//        2. 다람쥐 초등학교만 골라낸 후 , name 뒤에 "어린이 붙여주세요 "

classmates
    .filter((data) => data.school === "다람쥐초등학교")
    .map((data) => ({ name: data.name + "어린이" }));

// [ { name: '영희어린이' } ]
