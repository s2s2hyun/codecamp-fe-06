function solution(nums) {
    const answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (answer.length < nums.length / 2 && answer.includes(nums[i]) === false) {
            answer.push(nums[i]);
        }
    }
    return answer.length;
}
