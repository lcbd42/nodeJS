// 정규식 비캡쳐링 그룹

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cnt = 0;
// 알파벳 소문자,대문자,숫자,공백이 하나 이상, 공백이 선두에 오는것은 허용하지 않음
const pattern = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*$/;

rl.on('line', function(line) {

    if(line.length <= 100){
        if(pattern.test(line)){
            cnt++
            console.log(line)
        }
        else{
            process.exit();
        }

    }

    if(cnt == 100) rl.close();

    
}).on('close', function() {

    process.exit();
});

