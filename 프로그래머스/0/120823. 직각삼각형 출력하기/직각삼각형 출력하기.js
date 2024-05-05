const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = (Number(input[0]));
    
    let line = 1;
    for(line; line <= n; line++){
        let startStr = "";
        let i = 0;
        
        for(i; i < line; i++){
            startStr += "*";
        }
        
        console.log(startStr);
    }
});