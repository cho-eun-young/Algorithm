function solution(n) {
    var answer = 0;
    for(let cnt = 1; cnt <= n; cnt++){
        if(n % cnt === 0) {
            answer++;
        }
    }
    return answer;
}