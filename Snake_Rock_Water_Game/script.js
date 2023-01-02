/* ******************************************************************* Snake Water GUN GAME...!!! ***************************************************************** */
// SNAKE --> WATER
// WATER --> GUN
// GUN --> SNAKE
// result.innerHTML = ` Welcome to Snanke-Water-Gun game In this game you have to paly 5 rounds with computer and Those Who win more round would be the winner </b>`
// result.innerHTML = ` Rules would be: \n SNAKE will drink WATER \n WATER will sink GUN \n GUN will shout SNAKE </b>`
// result.innerHTML = ` Snake Number is: 0 \n Water Number is: 1 \n Gun Number is: 2 </b>`
// let n = prompt(`Enetr The number of Round ame You want to play: `)
let n;
let y;
let point_y = 0;
let point_c = 0;
let r_draw = 0;
let n_round = 0;
let choise = document.querySelector('.choise');
let number_round = document.querySelector('.number_of_round')
let round_drawn = document.querySelector('.r_drawn');
let your = document.querySelector('#your_score');
let computer = document.querySelector('#computer_score');
let result = document.querySelector('.result');
let Snake = document.querySelector('#snake');
let Water = document.querySelector('#water');
let Gun = document.querySelector('#gun');
let reset = document.querySelector('.reset');
let one = document.querySelectorAll('.rounds')[0];
let three = document.querySelectorAll('.rounds')[1];
let five = document.querySelectorAll('.rounds')[2];
let seven = document.querySelectorAll('.rounds')[3];
let nine = document.querySelectorAll('.rounds')[4];
let no_round = document.querySelector('.no_round');
let number_round_display = document.querySelector('.rounds_number');
let final_result = document.querySelector('.final_result');
let output = document.querySelector('.output')

reset.addEventListener('click', function () {
    point_c = 0;
    point_y = 0;
    n_round = 0;
    r_draw = 0;
    round_drawn.innerHTML = '0';
    your.innerHTML = '0';
    computer.innerHTML = '0';
    number_round.innerHTML = '0';
    result.innerHTML = `Let's See Who Will Win`;
    no_round.style.display = 'flex'
    number_round_display.style.display = 'none';
    final_result.style.display = 'none';
    choise.style.display = 'grid';
})

Snake.addEventListener('click', function () {
    game('0');
})
Water.addEventListener('click', function () {
    game('1')
})
Gun.addEventListener('click', function () {
    game('2')
})
one.addEventListener('click', function () {
    round('1');
})
three.addEventListener('click', function () {
    round('3');
})
five.addEventListener('click', function () {
    round('5');
})
seven.addEventListener('click', function () {
    round('7');
})
nine.addEventListener('click', function () {
    round('9');
})



function round(no_ro) {
    n = no_ro;
    n = parseInt(n);
    console.log(n);
    no_round.style.display = 'none';
    number_round_display.style.display = "block";
    final_result.style.display = "flex";
    number_round_display.innerHTML = `The Game Will Be  Is Of ${n} Rounds`;

    
}


function game(user) {


    y = user;
    // console.log(y);
    let r = Math.floor(Math.random() * 3);
    // console.log(r);
    y = parseInt(y);

    switch (y) {
        case 0:
            if (r == 0) {
                result.innerHTML = ` This Round is Draw. \t You Both Had Chosen Same Sake.`
                round_drawn.innerHTML = ++r_draw;
                number_round.innerHTML = ++n_round;
            }
            else if (r == 1) {
                result.innerHTML = ` Congratulations You Won This Round \n You Had Chosen Snake And Snake Had Poisoned The Water </b>`
                your.innerHTML = ++point_y;
                number_round.innerHTML = ++n_round;
            }
            else {
                result.innerHTML = ` You lost This Round. \n You  Had Chosen Sake. \t Gun Had Killed the Snake </b>`
                computer.innerHTML = ++point_c;
                number_round.innerHTML = ++n_round;
            }
            break;


        case 1:
            if (r == 0) {
                result.innerHTML = ` You lost This Round. \n You  Had Chosen Snake And Snake Had Poisoned The Water . </b>`
                computer.innerHTML = ++point_c;
                number_round.innerHTML = ++n_round;
            }
            else if (r == 1) {
                result.innerHTML = ` This Round is Draw. \n You Both Had Chosen Same Water. </b>`
                number_round.innerHTML = ++n_round;
                round_drawn.innerHTML = ++r_draw;
            }
            else {
                result.innerHTML = ` Congratulations You Won This Round \n You Had Chosen Water. And Water had Made Gun Sink </b>`
                your.innerHTML = ++point_y;
                number_round.innerHTML = ++n_round;
            }
            break;


        case 2:
            if (r == 0) {
                result.innerHTML = ` Congratulations You Won This Round \n You Had Chosen Gun. And Gun Had Killed Snake </b>`
                your.innerHTML = ++point_y;
                number_round.innerHTML = ++n_round;
            }
            else if (r == 1) {
                result.innerHTML = ` You lost This Round. \n You  Had Chosen Gun And Gun was Sink in The Water . </b>`
                computer.innerHTML = ++point_c;
                number_round.innerHTML = ++n_round;
            }
            else {
                result.innerHTML = ` This Round is Draw. \n You Both Had Chosen Same Gun. </b>`
                round_drawn.innerHTML = ++r_draw;
                number_round.innerHTML = ++n_round;
            }
            break;
        default:
            result.innerHTML = `Enter Correct Number \t  ${y} is Invalid Number For Game.  </b>`
            break;
    }
    if (point_y < point_c) {
        output.innerHTML = '<b>HaHaHaHa...!!!<br> You Loos With Computer</b>'
    }
    else if (point_y > point_c) {
        output.innerHTML = '<b>Congratulations..!!!<br> You Won With Computer</b>'
    
    }
    else {
        output.innerHTML = '<b>You Both Played Well So Match Is Draw</b>'
    
    }
    
}






