function solution(arr)
{
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    let answer = arr.filter((value, index) => value !== arr[index + 1])
    console.log(answer)
    
    return answer;
}