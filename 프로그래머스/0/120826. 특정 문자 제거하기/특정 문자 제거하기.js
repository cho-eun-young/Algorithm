function solution(my_string, letter) {
    var answer = '';
    let cnt = 0;
    for(cnt; cnt < my_string.length; cnt++){
        if(letter !== my_string[cnt]){
            answer += my_string[cnt]
        }
    };
    
    return answer;
}