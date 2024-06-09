function solution(numbers) {
    var answer = 0;
    for(let i = 0; i <= 9; i++){
        numbers.find((value) => value === i) ? "" : (answer += i);
    }
    
    return answer;
}
