// go to game 
function start_game(){
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    win_counter_o = 0
    win_counter_x = 0
    clear_board()
    update_history()
}
function back_menu(){
    document.getElementById("game").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    clear_board()
}
let current_player= "x"
let win_counter_o = 0
let win_counter_x = 0

const cells = document.querySelectorAll(".cell");
const turn_display = document.getElementById("turn");
const history_display = document.getElementById("history");

function update_turn() {
    turn_display.textContent = `Turn: ${current_player}`;
}

function update_history() {
    history_display.textContent = `X : ${win_counter_x} O :${win_counter_o}`;
}

function clear_board(){
    cells.forEach(cell => cell.textContent = "");
    current_player = "X"
    update_turn();
    update_history();
}
    
function reset_board(){
    cells.forEach(cell => cell.textContent = "");
    if (current_player == "X"){
        current_player = "O"
    }else{
        current_player = "X"
    }
    update_turn();
    update_history();
}


function check_winner() {
    let probabilities_win = [
        [0,1,2],[3,4,5],[6,7,8],  
        [0,3,6],[1,4,7],[2,5,8],  
        [0,4,8],[2,4,6]           
    ];

    for (const combo of probabilities_win) {
        const [a,b,c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }
    return null;
}
function check_draw(){
    for(let i= 0 ;i<cells.length; i++){
        if(cells[i].textContent === ""){
            return false
        }
    }
    return true ;
}

cells.forEach(cell => cell.addEventListener("click", () => {
    if (cell.textContent !== "") return; 
    cell.textContent = current_player;

    const winner = check_winner();
    if (winner) {
        alert(`${winner} wins!`);
        reset_board();
        if(winner === "X"){
            win_counter_x++;
        }else {
            win_counter_o++;
        }
        update_history()
        return;
    }

    const draw = check_draw()
    if (draw){
        alert(`its draw`);
        reset_board()
    }

    current_player = current_player === "X" ? "O" : "X";
    update_turn();
}));

