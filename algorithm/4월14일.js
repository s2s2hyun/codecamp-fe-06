//number === Int

// 2의 53제곱 1을 뺀값

a = 2 ** 53 - 1;

Number.MAX_SAFE_INTEGER;

// 이 범위가 정상적인 마지막 허용이 되는값 참고

Number.isSafeInteger(a);

//이 범위가 정상적인 마지막 허용이 되는값이면 true // 벗어나면 false

// ((a % c) + (b % c)) % c
// (a+b)%c

// 0,1,1,2,3,5,....

function solution(n) {
    // 피보나치 수열들을 저장하는 배열
    const answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
    }
    return answer[n];
}
