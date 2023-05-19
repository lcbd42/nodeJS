// 배열 요소 제거

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

//inputs에 1부터 30까지 삽입
for (let i = 1; i <= 30; i++) {
    inputs.push(i);
}
// console.log(inputs)

rl.on('line', function(line) {

    if(line >= 1 && line <= 30){

        // 같으면 해당 숫자 inputs에서 빼기
        for (let i = inputs.length - 1; i >= 0; i--) {
            if (inputs[i] == line) {
              inputs.splice(i, 1); // 배열에서 해당 요소 제거
            }
        }
        // console.log(inputs)

        if (inputs.length == 2) {
            rl.close();
        }

    }
    else{
        process.exit()
    }


}).on('close', function() {

    for(let i=0; i<inputs.length; i++){
        console.log(`${inputs[i]}`)
    }

    process.exit();
});


