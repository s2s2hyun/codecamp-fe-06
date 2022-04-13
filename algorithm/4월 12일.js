function solution(answers) {
    var answer = [];
    return answer;
}

// solution(answers)
// 1개부터 ~10000개 까지이다 .
// 1ㅡ2ㅡ3ㅡ4ㅡ5 정답 중 하나이다.
// 오름차순 순으로 return
//  1번 수포자가 찍는 방식
//  1 , 2, 3, 4, 5 , 1 , 2 , 3 , 4 , 5 , 1 , 2 , 3 , 4 , 5 , 1 , 2 , 3 , 4 , 5 .....	(5개의 패턴 )
//  2번 수포자가 찍는방식
//	2 , 1 , 2 , 3 , 2 , 4 , 2 , 5 , 2 , 1 , 2 , 3 , 2 , 4 , 2 , 5 							,.....(8개의 패턴 )
// 3번 수포자가 찍는방식
// 3 , 3 , 1 , 1 , 2 , 2 , 4 , 4 , 5 , 5 , 3 , 3 ...																	(10개의 패턴을 갖고 있다.)
const answerTable = [
    // 1번 수포자가 찍는 방식
    [1, 2, 3, 4, 5], //5개
    // 2번 수포자가 찍는 방식
    [2, 1, 2, 3, 2, 4, 2, 5], // 8개
    // 3번 수포자가 찍는 방식
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], //10개
];
function solution(answers) {
    //학생의 점수들 저장하는 배열
    const answer = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        for (let l = 0; l < answerTable.length; l++) {
            if (answerTable[l][i % answerTable[l].length] === answers[i]) {
                answer[l]++;
            }
        }
    }

    const biggest = Math.max(...answer);
    const result = [];
    for (let i = 0; i < answer.legnth; i++) {
        if (answer[i] === biggest) {
            result.push(i + 1);
        }
    }
    return result;
}

// console.log(biggest,answer)

const answerTable = [
    // 1번 수포자가 찍는 방식
    [1, 2, 3, 4, 5], //5개
    // 2번 수포자가 찍는 방식
    [2, 1, 2, 3, 2, 4, 2, 5], // 8개
    // 3번 수포자가 찍는 방식
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], //10개
];
function solution(answers) {
    const scoreList = answerTable.map((el, i) => {
        //              찍은 번호가 정답과 일치하는지 확인하고 학생들의 점수와 합산
        const score = answers.reduce((acc, cur, l) => {
            return acc + (el[l % el.length] === cur ? 1 : 0);
        }, 0);
        return { student: i + 1, score };
    });

    const biggest = Math.max(
        ...scoreList.map((el) => {
            return el.score;
        })
    );

    return scoreList
        .filter((el) => {
            return el.score === biggest;
        })
        .map((el) => el.student);
}
