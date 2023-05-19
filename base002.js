// 입력 여러번을 배열에, 정규식

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', function(line) {

    //문자열이 a 또는 h로 구성되어 있고 h는 마지막에 한 번만 있는지 확인
    if (/^a*h$/.test(line)){

        //a의 범위는 0부터 999까지
        const countA = (line.match(/a/g) || []).length;
        if (countA >= 0 && countA <= 999) {
            inputs.push(line);
        } 

        if (inputs.length == 2) {
            rl.close();
        }
    }
    else{
        // console.log('input type err')
        process.exit();
    }

    
}).on('close', function() {

    // input.pop(); // 마지막에 입력된 '0 0'을 제거합니다.
    if(inputs[0].length >= inputs[1].length){
        console.log('go')
    }
    else{
        console.log('no')
    }
    

    process.exit();
});

