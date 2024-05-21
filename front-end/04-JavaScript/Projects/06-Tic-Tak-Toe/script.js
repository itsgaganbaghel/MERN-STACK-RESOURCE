// const get = (element) => document.getElementById('element');

let boxes = document.querySelectorAll('.box');
let gameInfo = document.querySelector('#gameInfo');
let newGameBtn = document.querySelector ('#btn');

let currentPlayer ; 
let gameGrid ;
 
const winingPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] ;

// lets create a function to initialize the game 

function initGame() {
    currentPlayer = 'x';
    gameGrid = [ '' ,'' , '', '', '', '', '', '', '', ''];
    newGameBtn.classList.remove('active');
    gameInfo.innerHTML  =`currentPlayer - ${currentPlayer}` ;
}

initGame();