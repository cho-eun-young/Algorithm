function solution(s){
    var answer = true;
    let cntP = 0;
    let cntY = 0;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'p' || s[i] === 'P'){
            cntP++;
        }
        
        if(s[i] === 'y'|| s[i] === 'Y'){
            cntY++;
        }
        
    }
    if(cntY === cntP || (cntY === 0 && cntP === 0)){
        answer=true;
    }else if(cntY !== cntP){
        answer=false;
    }
    return answer;
}