// 조건식 문법중에  switch 문법 

const day = "월요일"
let result = "";
switch (day) {
  case "월요일" :
			 result = "오늘은 월요일 입니다.";
  case "화요일" :
	  		result = "오늘은 화요일 입니다.";				
  case "수요일" :
				result  =  "오늘은 수요일 입니다.";
  default : 
			result = "오늘은" + day + "입니다.";
 
    // console.log("오늘은 월요일 입니다.");
   //  break; 를 통해서 case "화요일"를 브레이크한다.
	//   default 는 맨아래에서 작동 ( 맨 위에서 했다면 작동 X 최 하단서 해줘야한다 )  
    
}


function boolean(input1, input2) {
	if(	input1 === true || input2	=== true){
		console.log("true")
	}	else if (	input1 === false && input2 === false	){
		console.log("false")
	}
}

boolean(	true,	false	)
boolean( false, true  )
boolean( false, false )

1 ===1 && 1===1


1===1
1===2
//'true'
'true'
'false'


true


true
false



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ홀짝 

function evenOdd(num) {
	if(	 num	===0	) {
		console.log("zero") 
        // >>>>>>>>>> 'zero'

  }	else if (num % 2 ===0 ) {
//  짝수 (나머지 값이 0일때 ) >>>>>>>>>>>>>>> 'Even'
		console.log("Even")

	}	 else if( num % 2 ===1 ){           
// 홀수 나머지 값이 1일때
    console.log("Odd")
	}
}

evenOdd(	0	)
evenOdd(	12	)


2%2
3%2
4%2
5%2

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 21 며칠
function temperature(num){
	if(	num >= 24) {
		console.log("조금 덥습니다.")
	} else if (	num >= 19 && num <= 23 ){

// 19,20,21,22,23
	console.log("날씨가 좋네요")

} else if( num <= 18 ){
 	console.log("조금 춥네요.")
	}
}

temperature( 27 )

temperature( 23 )

// ㅡㅡ 
// '조금 덥습니다.'



// '날씨가 좋네요'

// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
//   s	           return
// "Zbcdefg"	"gfedcbZ"

// `function solution(s) {
//     var answer = '';
//     return answer;
// }

// a = "1"
// b = "2"



//아스키코드 

// 1. 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다.

// 2. 문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소관계를 비교

// "a".charCodeAt() //"a" 97
// "b".charCodeAt() //"b" 98
// "z".charCodeAt() //"z" 122
// //알파벳 소문자의 유니코드 
// //97~122
// "A".charCodeAt() // "A"65
// "Z".charCodeAt() // "Z"90
// 알파문 대문자의 유니코드 65 ~90

// "A" > "a"

// "a" > "Z"

function solution(s) {
	const answer= [];
	for(let i = 0 ; i < s.length; i++){
		answer.push(s[i]);
}
answer.sort((a,b) => {
	console.log(a,b)
	return a > b ? -1 : 1;
})
	let result=""
	for(let i = 0; i < answer.length; i++){
		result += answer[i]
}

		return result;
}



//아스키코드 

// 1. 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다.

// 2. 문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소관계를 비교

// "a".charCodeAt() //"a" 97
// "b".charCodeAt() //"b" 98
// "z".charCodeAt() //"z" 122
// //알파벳 소문자의 유니코드 
// //97~122
// "A".charCodeAt() // "A"65
// "Z".charCodeAt() // "Z"90
// 알파문 대문자의 유니코드 65 ~90

// "A" > "a"

// "a" > "Z"

function solution(s) {
	const answer= [];
	for(let i = 0 ; i < s.length; i++){
		answer.push(s[i]);
}
answer.sort((a,b) => {
	console.log(a,b)
	return a > b ? -1 : 1;
})
	let result=""
	for(let i = 0; i < answer.length; i++){
		result += answer[i]
}

		return result;
}



// 1.배열메서드 
// -배열에서만 사용이 가능하다
// -문자열 숫자를 내림차순 또는 오름차순을 할수있다.
//arr = ["a","b","Z","c"]

//내림차순 === "c","b","a","Z"
// arr.sort( (a,b)=> {
// 	console.log(a,b)
//   return a > b ? 1 : -1; // 오름차순 

//   return a < b ? -1 : 1; // 오름차순 

//   return a > b ? -1 : 1;// 내림차순 

//   return a < b ? 1 : -1; //내림차순 
// } )
위에 방식은 문자열 정렬에서는 작동하지 않는다.
// sort 는 숫자가 어떤지 2자리 숫자여도 앞자리가 1이면 작게본다 

arr = [1,2,10,1000,3]

아래방식은 숫자 / 문자열 방식에서 정렬이 작동한다 좀더 안정적이다.

arr.sort((a,b))=> {
	return a > b ? 1: -1;             // 오름차순 
	return a > b ? -1: 1;            // 내림차순


})


