function solution(array) {
    var answer = 0;
    let list = array.sort(function(a,b){
        return a - b;
    })
    // let list = array.sort((a,b) => a - b);
    let center = Math.floor(array.length / 2);
    return list[center];
    
    
/** sort 오름차순
    center = Math.floor(array.length) 에서 소수점을 뗀 중간값 구함
    */
    
}