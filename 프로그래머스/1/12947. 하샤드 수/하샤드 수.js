function solution(x) {
    var answer = true;
    let division = (x + '').split('');
    let sum =0;
    for(let i = 0; i < division.length; i++){
        sum += Number(division[i]);
    }
    if(x % sum === 0){
        return true;
    }else{ return false}
}