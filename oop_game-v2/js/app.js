/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const gameButton = document.getElementById('btn__reset');

gameButton.addEventListener('click', () => {
game = new Game();
game.resetGame();
game.startGame();
});

const keyBoardButtons = document.querySelectorAll(".key");
const button = document.getElementsByTagName('button');

for (let i = 0; i < keyBoardButtons.length; i++){
keyBoardButtons[i].addEventListener('click', function (e){
    game.handleInteraction(e.target);
    })
}
;

// for (let i =0; i < keyBoardButtons.length; i += 1){
//     keyBoardButtons[i].addEventListener('click', function (e){
        

//     })
// }
