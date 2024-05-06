function solution(my_string, n) {
    var answer = '';
    let cnt = 0;
    
    for(cnt; cnt < my_string.length; cnt++){
        let str = my_string[cnt];
        
        for(let i = 0; i < n; i++){
            answer = answer + str;
        }
    }
    return answer;
}