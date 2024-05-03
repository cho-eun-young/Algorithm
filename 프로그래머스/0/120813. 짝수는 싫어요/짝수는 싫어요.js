function solution(n) {
    var answer = [];
    
    let cnt = 1;
    for(cnt = 1; cnt <= n; cnt++){
        if(cnt % 2 !== 0 ){
            answer.push(cnt);
        }
    }
    return answer;
}