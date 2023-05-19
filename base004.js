// 대소문자 변경

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let word;
let convertedWord = ""; // 변환된 단어를 저장할 변수


rl.on('line', function(line) {

    word = line;
    if(word.length <= 100){
        for (let i = 0; i < word.length; i++) {
            let alphabet = word[i];
            
            // 소문자인 경우 대문자로 변환하여 추가
            if (alphabet >= "a" && alphabet <= "z") {
              convertedWord += alphabet.toUpperCase();
            
            // 대문자인 경우 소문자로 변환하여 추가
            } else if (alphabet >= "A" && alphabet <= "Z") {
              convertedWord += alphabet.toLowerCase();
            
            // 알파벳이 아닌 경우 프로그램 종료
            } else {
                process.exit();
            }
          }
    }

    rl.close();


}).on('close', function() {

    console.log(convertedWord)

    process.exit();
});


//