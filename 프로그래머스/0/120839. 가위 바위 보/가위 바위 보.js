function solution(rsp) {
    var answer = '';
    for(let cnt = 0; cnt < rsp.length; cnt++){
        let stringChange = rsp.charAt(cnt);
        if(stringChange === "2"){
            answer += "0";
        }else if(stringChange === "0"){
            answer += "5";
        }else if(stringChange === "5"){
            answer += "2";
        }
    }
    return answer;
}