const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let T;
let outputs = [];

rl.on('line', function (line) {

    if (!T) {
        T = parseInt(line);
    } else {

        // 입력 라인 잘라서 정수로 변환
        const arr = line.split(' ').map(el => parseInt(el));
        outputs.push(arr[0]+arr[1])

        T--;
        if(T == 0) rl.close();
    }

}).on('close', function () {

    for(let i=0; i<outputs.length; i++){
        console.log(`Case #${i+1}: ${outputs[i]}`)
    }

    process.exit();
});
