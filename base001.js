// 단일 입력

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout,

});

let input;


const gradeToGPA = {
    'A+': 4.3,
    'A0': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B0': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C0': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D0': 1.0,
    'D-': 0.7,
    'F': 0.0
};

function solution(input) {
    let gpa = gradeToGPA[input];

    if (gpa === undefined) {
        console.log("Invalid grade. Please enter a valid grade.");
    } else {
        console.log(`${gpa.toFixed(1)}`);
    }
}

 

rl.on("line", function (line) {
    
    input = line;           // 입력받은 문자열, line
    // input = parseInt(line);
    rl.close();             // 입력 종료

}).on("close", function () {

    solution(input); // 문제 풀이 함수 호출
    process.exit();  // 프로세스 종료

});





