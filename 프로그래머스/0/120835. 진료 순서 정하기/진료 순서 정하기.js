function solution(emergency) {
    let newEmergencyArray = [];
    let cnt = 0;
    for(cnt; cnt < emergency.length; cnt++){
        newEmergencyArray.push({value: emergency[cnt], idx: cnt})
    }
    // console.log(newEmergencyArray);
    newEmergencyArray.sort((a,b) => b.value -a.value);
    console.log(newEmergencyArray);
    
    var answer = new Array(emergency.length);
    cnt = 0;
    for(cnt; cnt < newEmergencyArray.length; cnt++){
        const item = newEmergencyArray[cnt];
        answer[item.idx] = cnt + 1;
    }
    return answer;
}