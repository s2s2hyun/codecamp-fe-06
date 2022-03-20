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
