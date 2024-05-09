function solution(age) {
    let answer = '';
    const stringAge = String(age);
    
    let cnt = 0;
    for(cnt; cnt < stringAge.length; cnt++){
        answer = answer + String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49)
    }
    
    // ascii code -> string : fromCharCode
    // string -> ascii code : charCodeAt
    // ascii code 97 = 'a'
    // ascii code 48 = '0'
    return answer;
}