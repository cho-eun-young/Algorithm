function solution(s) {
    if((s.length === 4 || s.length === 6) && !isNaN(s)){
        for(let i = 0; i < s.length; i++){
            if(s[i] === 'e'){
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
