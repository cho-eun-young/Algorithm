function solution(numbers) {
    var answer = 0;
    let cnt = 0;
    let sum = 0;
    for(cnt; cnt < numbers.length; cnt++){
        sum = sum + numbers[cnt];
    }
    // sum : 배열의 총합이 들어있습니다.
    
    return sum / numbers.length;
}