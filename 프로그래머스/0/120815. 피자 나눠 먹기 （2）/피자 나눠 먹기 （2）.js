function solution(n) {
    var answer = 0;
    let pizzaCnt = 1;
    for(pizzaCnt; pizzaCnt <= n; pizzaCnt++){
        if((pizzaCnt * 6 ) % n === 0){
            return pizzaCnt;
        }
    }
    return answer;
}