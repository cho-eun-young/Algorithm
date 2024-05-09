function solution(numbers, num1, num2) {
    let cnt;
    let answer = [];
    for(cnt = num1; cnt <= num2; cnt++){
        answer.push(numbers[cnt]);
    }
    return answer;
}