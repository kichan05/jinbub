// var dec = 123;
// var hex = dec.toString(8); // === "7b"
// 10진법 -> n진법

// var hex = "101010";
// var dec = parseInt(hex, 2); // === "123"
// n진법 -> 10진법


function getRand(min, max) {
    // 랜덤 수를 뽑는 함수
    var rand = Math.random() * (max - min) + min;

    return parseInt(rand);
}

var kind = [2, 8, 10, 16]; // 진법 모음
// var start_mode = 0;
// var end_mode = 0;
// var start_num = 0;
// var end_num = 0;
// var num_10 = 0;

function setting(){
    inputAnswer.value = "";
    start_mode = kind[getRand(0, kind.length)]; // 문제로 주어질 진법을 뽑는다.
    end_mode = 0;
    
    while (1){
        // 답으로 주어질 진법을 뽑는다.
        end_mode = kind[getRand(0, kind.length)];
        
        if (start_mode != end_mode){
            break;
        }
    }   
    num_10 = getRand(30, 500); // 10진법 수를 뽑는다.
    if (start_mode == 10){
        start_num = num_10;
    }   else{
        start_num = num_10.toString(start_mode);
    }

    if (end_mode == 10){
        end_num = num_10;
    }   else{
        end_num = num_10.toString(end_mode);
    }
    question.innerHTML = start_num;
    startMode.innerHTML = "(" + start_mode + ")";
    endMode.innerHTML = "(" + end_mode + ")";
}

// var msg = start_num + "(" + start_mode + ") -> " + end_num + "(" + end_mode + ")";
// // var mas = format('{0}회 클릭', 1);
// alert(msg);

var question = document.querySelector("h2.question");
var startMode = document.querySelector("h2.start-mode");
var endMode = document.querySelector("h2.end-mode");

var inputAnswer = document.querySelector("input.input-answer");
setting()

function checkAnser(){
    // console.log(end_num);
    const answer = inputAnswer.value.toLowerCase();
    
    if (answer == end_num){
        alert("정답입니다.");
        setting();
    }   else{
        alert("오답입니다.");
    }
}

// answer_check.onclick

window.onload = function() {
    var answer_check = document.querySelector("button.check-answer")
    // header 객체에 onclick 이벤트 속성을 연결
    answer_check.onclick = checkAnser;
};


