let arr_game = [
    { name: 'rock', emoji: '👊🏻', beats: 'scissor' },
    { name: 'paper', emoji: '🖐🏻', beats: 'rock' },
    { name: 'scissor', emoji: '✌🏻', beats: 'paper' },
]
const button = document.querySelectorAll('[data-selection]');
const final_column =  document.querySelector('[data-final_column')
const your_score = document.querySelector('[data-your_score]')
const computer_score = document.querySelector('[data-computer_score]')

button.forEach(select_button => {
    select_button.addEventListener('click', even => {

        const your_choose = select_button.dataset.selection;
        const selection = arr_game.find(selection => selection.name === your_choose);
        you_selected(selection);
        
    })
})


function add_result( selection , winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji;
    div.classList.add('result_1')  
    if(winner) div.classList.add("winner")
    final_column.after(div)
    console.log(selection.emoji);
    console.log(winner);
}

function random() {
    let ran = Math.floor(Math.random() * arr_game.length);
    return arr_game[ran];
}

function increment_score(score){
    score.innerText = parseInt(score.innerText) + 1; 
}


function winner(your, computer) {
    return your.beats === computer.name;
}


function you_selected(value) {
    let user_selection = value;
    let computer_selection = random();
    const you_win = winner(user_selection, computer_selection);
    const comp_win = winner(computer_selection, user_selection);
    // console.log(you_win);
    // console.log(comp_win);
    // console.log(value);
    // console.log(computer_selection);
    add_result(computer_selection , comp_win)
    add_result(user_selection , you_win)
   if(you_win) increment_score(your_score)
    if(comp_win)increment_score(computer_score)
}






