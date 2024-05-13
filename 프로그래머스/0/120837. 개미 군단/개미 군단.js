function solution(hp) {
    let general = Math.floor(hp / 5);
    let solider = Math.floor((hp - general * 5) / 3);
    let worker = hp - (general * 5) - (solider * 3)
    return general + solider + worker;
}