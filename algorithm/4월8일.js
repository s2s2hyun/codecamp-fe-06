// 최대공약수와 최소공배수
// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]
// 입출력 예 설명
// 입출력 예 #1
// 위의 설명과 같습니다.

// 입출력 예 #2
// 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.

function solution(n, m) {
    //최대공약수 : 두개의 수의 약수 중에서 (공통되는) 제일 큰 수
    //최소공배수 : 두개의 수의 배수 중에서 (공통되는) 제일 작은 수
    const answer = [];
    const biggest = Math.max(n, m);
    //최대공약수 구하기
    for (let i = 1; i <= Math.max(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            max = i;
        }
    }

    //최소공배수구하기
    let min = 0;
    for (let i = biggest; i <= n * m; i += biggest) {
        if (i % Math.min(n, m) === 0) {
            min = i;
            break;
        }
    }
    return [max, min];
}

//
function solution(n, m) {
    //유클리드 호제법
    // - 최대 공약수를 구하기 위한 알고리즘 (공식)

    //a를 b 로 나눴을 때 (a가 b보다 클 경우 ) = 큰 수에서 작은 수를 나눴을 때
    //나머지 값이 0 이 되면 ,작은 수(b)가 최대 공약수가 된다.
    //나머지 값이 0이 되지 않으면 ,작은 수 (b)가 큰 수 (a)가 되고,
    //나머지 작은 수 (b)가 된다.
    //위의 방식을 반복했을 때 나머지 값이 0이 되면 ,작은 수 (b)가 최대공약수가 된다.
    let a = Math.max(n, m); // 큰수
    let b = Math.min(n, m); // 작은 수
    let r = 0; //나머지값

    while (a % b > 0) {
        r = a % b; // 나머지 값 저장
        a = b; // 큰 수에 작은 수를 할당
        b = r; // 작은수에 나머지값 할당
    }

    //최소공배수는 두수 (n,m) 곱한 값에 최대 공약수를 나눈 값
    return [b, (n * m) / b];
}
