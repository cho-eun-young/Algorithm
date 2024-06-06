function solution(arr) {
    var answer = [];
    let min = Math.min(...arr);
    if(arr.length <= 1){
        return [-1];
    }else{
        return arr.filter(x => x !== min);
    }
    
    return answer;
}