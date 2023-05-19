// 배열 할당여부 파악, 띄어쓰기 잘라서 배열 넣기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T;
let inputs = [];
let target;
let cnt = 0;

rl.on('line', function(line) {

    //T가 할당되지 않았을때
    if (!T) {
        T = parseInt(line);
    } 

    // 배열은 할당 여부 파악시 길이가 0인지를 조건으로 사용해야함
    else if(!inputs.length){
        //한줄을 띄어쓰기로 구분하여 배열에 넣기
        inputs = line.split(' ')
    }
    else{
        target = line

        for(let i=0; i<inputs.length; i++){
            if(target == inputs[i]) cnt++;
        }
        rl.close();
    }
 
    
}).on('close', function() {

    console.log(cnt)

    process.exit();
});

//
