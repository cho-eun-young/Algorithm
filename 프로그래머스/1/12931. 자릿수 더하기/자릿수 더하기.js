function solution(n)
{    
    let arr = [];
    let sum = 0;
    var answer = String(n).split('');
    for(let i = 0; i < answer.length; i++){
        arr.push(parseInt(answer[i]))
    }
    
    for(let j = 0; j < arr.length; j++){
        sum += arr[j];
    }

    return sum;
}