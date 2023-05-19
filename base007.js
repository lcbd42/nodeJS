// 재귀함수

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});

let input;
let res;

// 재귀함수
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}
  

rl.on("line", function (line) {
    
    input = parseInt(line)
    res = factorial(input)         
    rl.close();             

}).on("close", function () {

    console.log(res)
    process.exit();  // 프로세스 종료

});
  