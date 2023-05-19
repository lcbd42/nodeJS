// ES6 문자열 간단히 반복

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});

let input;
let cnt = 0;


rl.on("line", function (line) {

    input = parseInt(line)
    if(input%4==0 && input >= 4 && input <= 1000){
        cnt = input/4
        rl.close()
    }


}).on("close", function () {
    console.log(`${"long ".repeat(cnt)}int`)
    process.exit(); 
    
});

//