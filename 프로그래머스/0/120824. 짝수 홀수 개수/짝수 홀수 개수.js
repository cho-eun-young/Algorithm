function solution(num_list) {
    let cnt = 0;
    let even = 0;
    let odd = 0;
    let answer = [];
    for(cnt; cnt < num_list.length; cnt++){
        if(num_list[cnt] % 2 === 0 ){
            even += 1;
        }else{
            odd += 1;
        }
    }
    return [even, odd];
}