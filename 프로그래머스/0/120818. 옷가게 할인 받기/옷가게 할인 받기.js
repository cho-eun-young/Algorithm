function solution(price) {
    var answer = 0;
    let result = 0;
    if(price >= 500000){
        return result = Math.floor(price * 0.8)
    } else if (price >= 300000){
        return result = Math.floor(price * 0.9);
    } else if (price >= 100000){
        return result = Math.floor(price * 0.95);
    } 
    return price;
}