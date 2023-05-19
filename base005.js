// 테스트케이스, 출력 배열
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let T;
let inputs = [];

rl.on('line', function (line) {

    //T가 할당되지 않았을때
    if (!T) {
        T = parseInt(line);
    } else {
        inputs.push(line);
        T--;
        if(T == 0) rl.close();
    }

}).on('close', function () {

  const outputStrings = [];

  for (let i = 0; i < inputs.length; i++) {

    const input = inputs[i];
    const firstChar = input[0];
    const lastChar = input[input.length - 1];
    const output = firstChar + lastChar;

    outputStrings.push(output);
  }

  console.log(outputStrings.join('\n'));

  process.exit();
});

//