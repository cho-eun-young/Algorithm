function solution(numbers, direction) {
    let change;
    if(direction === 'right'){
        change = numbers.pop();
        numbers.unshift(change);
    }else if(direction === 'left'){
        change = numbers.shift();
        numbers.push(change);
    }
    return numbers;
}