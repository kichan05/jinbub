function getRand(min, max) {
    // 랜덤 수를 뽑는 함수
    var rand = Math.random() * (max - min) + min;

    return parseInt(rand);
}

function getYaksu(num){
    // 수의 모든 약수를 가져온다
    var insus = [];
    for (var i = 2; i <= num; i++){
        if(num % i == 0){
            insus.push(i);
        }
    }

    return insus;
}

function check_answer(){
    input_answer = answer_input.value;

    if(answer_2 === input_answer){
        alert("정답입니다.");

        setting();
    }   else{
        alert("오답입니다.");
    }
    // alert(input_answer);
}



var answer_input = document.querySelector("input.input-answer");
var checkAnswer = document.querySelector("button.check-answer");

checkAnswer.onclick = check_answer;

function setting(){
    answer_input.value = "";

    while(1){
        var mode = getRand(0, 4);
        // var mode = 3;
        
        var num1 = getRand(10, 15);
        if (mode === 3){
            insus = getYaksu(num1);
            if (insus.length === 1){
                continue;
            }
            var num2 = insus[getRand(0, insus.length - 1)];
        }   else{
            var num2 = getRand(10, 15);
        }
        
        // console.log(`${mode} ${num1} ${num2}`);
        break;

    }
    var answer;
    var char;
    switch (mode){
        case 0:
            answer = num1 + num2;
            char = "+";
            break;
        case 1:
            answer = num1 - num2;
            char = "-";
            break;
        case 2:
            answer = num1 * num2;
            char = "*";
            break;
        case 3:
            answer = num1 / num2;
            char = "/";
            break;
    }


    num1_2 = num1.toString(2);
    num2_2 = num2.toString(2);
    answer_2 = answer.toString(2);

    document.querySelector("h2.num1").innerHTML = num1_2 + "(2)";
    document.querySelector("h2.num2").innerHTML = num2_2 + "(2)";
    document.querySelector("h2.char").innerHTML = char;
    // title.innerHTML = `${num1_2}<small>(2)</small> ${char} ${num2_2}<small>(2)</small> = ???`;
}
// console.log(title);


setting();