var action = new Array();
action[1] = 0;
action[2] = 0;
action[3] = 0;
action[4] = 0;
action[5] = 0;
action[6] = 0;
action[7] = 0;
action[8] = 0;
action[9] = 0;
var number_of_moves = 0;
var output_result="";

function user_clicked(box){
    if(number_of_moves>9)
    {
        return false;
    }
    if(action[box] == 0){
        var user_input = document.getElementById('b' + box);
        user_input.innerHTML = "<div class='symbol-x'><div class='first-dash'><div class='first-square'></div></div><div class='second-dash'><div class='second-square'></div></div></div>";
        action[box] = 'X';
        number_of_moves++;
        is_success();
        computer_clicked();
    }
}

function computer_clicked(){
    if(number_of_moves>=9) return false;
    do {
        var next_move = Math.ceil(Math.random()*9);
    } while(action[next_move]!=0);
    var user_input = document.getElementById('b' + next_move);
    user_input.innerHTML = "<div class='symbol-o'></div>";
    action[next_move] = 'O';
    number_of_moves++;
    is_success();
}

function is_success(){
    if((action[1]=='X' && action[2]=='X' && action[3]=='X') || (action[4]=='X' && action[5]=='X' && action[6]=='X') ||
        (action[7]=='X' && action[8]=='X' && action[9]=='X') || (action[1]=='X' && action[5]=='X' && action[9]=='X') ||
        (action[3]=='X' && action[5]=='X' && action[7]=='X') || (action[1]=='X' && action[4]=='X' && action[7]=='X') ||
        (action[2]=='X' && action[5]=='X' && action[8]=='X') || (action[3]=='X' && action[6]=='X' && action[9]=='X'))  {
        number_of_moves = 10;
        output_result = 'You Win!';
    }
    if((action[1]=='O' && action[2]=='O' && action[3]=='O') || (action[4]=='O' && action[5]=='O' && action[6]=='O') ||
        (action[7]=='O' && action[8]=='O' && action[9]=='O') || (action[1]=='O' && action[5]=='O' && action[9]=='O') ||
        (action[3]=='O' && action[5]=='O' && action[7]=='O') || (action[1]=='O' && action[4]=='O' && action[7]=='O') ||
        (action[2]=='O' && action[5]=='O' && action[8]=='O') || (action[3]=='O' && action[6]=='O' && action[9]=='O'))  {
        number_of_moves = 10;
        output_result = 'You Lose!';
    }
    
    document.getElementById('output').innerHTML = output_result;
    if(output_result == "You Win!"){
        $('.confetti-container').css('display','block');
        $('#output').addClass('.output-result');
    }
    if(output_result == "You Lose!"){
        $('body').addClass('background-change');
    }
}

