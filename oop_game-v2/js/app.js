/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const gameButton = document.getElementById('btn__reset');

gameButton.addEventListener('click', function() {
game= new Game;
game.startGame();
});
