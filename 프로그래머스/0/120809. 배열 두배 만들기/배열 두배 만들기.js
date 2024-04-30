function solution(numbers) {
    var answer = [];
    
//     answer.push(numbers[0]*2);
    // let cnt = 0;
    // while(cnt < numbers.length){
    //     answer.push(numbers[cnt] * 2);
    //     cnt += 1;
    // }
    
    for(let i = 0; i < numbers.length; i++){
        answer.push(numbers[i] * 2);
    }
    
    
    return answer;
    
    
    
    
}