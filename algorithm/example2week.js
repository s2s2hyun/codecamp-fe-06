/*
    KDA
    어떤 게임에서 플레이한 것에 대한 점수를 K, D, A로 나타내고 있습니다.
    이는 Kill/Death/Assist에 대한 수치를 각각 나타냅니다. 
    
    조아라 멘토가 이 게임에서 진정한 고수인지를 kda 함수를 작성해 판별해주세요.
    kda 함수는 배열 array를 매개변수로 받습니다. 이 배열에는 K, D, A 점수가 순서대로 들어갑니다. 
    K + A < D 이거나, D = 0 이면 "hasu"를 리턴해주세요. 이외에는 "gosu"를 리턴해주세요.
    
    입출력 예시 )
    input       output
    -----------------------
    [0, 5, 3]   "hasu"
    [12, 4, 5]  "gosu"
    [0, 0, 1]   "hasu"
    
    제한 조건 )
    K, D, A는 모두 정수입니다.
    0 <= K, D, A <= 20
*/

function kda(array) {
    const [k, d, a] = array;
    return k + a < d || d === 0 ? "hasu" : "gosu";
}

/*
    시험 성적
    
    시험 점수를 입력받아 90 ~ 100점은 A,
    80 ~ 89점은 B,
    70 ~ 79점은 C,
    60 ~ 69점은 D,
    나머지 점수는 F를 출력하는 함수를 완성하세요.
    단, 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수입니다.
*/

function score(num) {
    if (num >= 90) return "A";
    if (num >= 80) return "B";
    if (num >= 70) return "C";
    if (num >= 60) return "D";
    return "F";
}

/*
    사분면 고르기
    1, 2, 3, 4 사분면이 있습니다. 
    양 또는 음의 정수 x와 y의 좌표가 주어질 때 해당되는 사분면을 리턴하세요. 
    1사분면 : x좌표와 y 좌표가 모두 양수
    2사분면 : x좌표가 음수이고 y좌표가 양수
    3사분면 : x좌표와 y 좌표가 모두 음수
    4사분면 : x좌표가 양수이고 y좌표가 음수
    입출력 예시 )
    input       output
    -------------------
    x   y
    12  5          1
    
    제한조건 ) 
    −1000 ≤ x ≤ 1000; x ≠ 0
    −1000 ≤ y ≤ 1000; y ≠ 0
*/
//  ++  / -+ / -- / +-

function quadrant(x, y) {
    if (x > 0 && y > 0) return 1;
    if (x < 0 && y > 0) return 2;
    if (x < 0 && y < 0) return 3;
    return 4;
}
