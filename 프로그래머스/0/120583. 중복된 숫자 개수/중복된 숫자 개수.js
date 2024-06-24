function solution(array, n) {
    let result = array.filter((value) => (value === n))
    let answer = result.length;
    return answer;
}