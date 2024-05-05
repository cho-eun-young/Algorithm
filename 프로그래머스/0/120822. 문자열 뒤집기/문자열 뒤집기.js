function solution(my_string) {
    let result ='';
    let i = my_string.length - 1;
    
    for(i; i >= 0; i--){
        result += my_string[i];
    }
    return result;
}