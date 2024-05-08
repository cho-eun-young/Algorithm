function solution(n) {
    let cnt;
    let even = 0;
    for(cnt = 0; cnt <= n; cnt++){
        if(cnt % 2 === 0){
            even = even + cnt;
        }
    }
    return even;
}