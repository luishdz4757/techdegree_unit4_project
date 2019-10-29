/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
     this.missed = 0;
     this.phrase = this.createPhrases();
     this.activePhrase = this.getRandomPhrase();
    }
    //Creates the phrases that are available to be randomly chosen 
    createPhrases(){
        const phrases = [
        new Phrase ('life is like a box of chocolates'), 
        new Phrase ('there is no trying'),
        new Phrase ('may the force be with you'),
        new Phrase ('you have to see the matrix for yourself'),
        new Phrase ('you talking to me')];
        return phrases;
    }
    //Randomly chooses from the 5 phrases that were created
    getRandomPhrase(){
        const randomNum = Math.floor(Math.random() * this.phrase.length)
        return this.phrase[randomNum];
    }
    startGame() {
        const idOverlay = document.getElementById('overlay');
        idOverlay.style.display = 'none';
        this.getRandomPhrase().addPhraseToDisplay();
       
    }

    handleInteraction(){

    }
    
    checkForWin (){
        const fullPhrase = document.queryselectorAll('.letter')
        const correctlyPickedLetters = document.querySelectorAll ('.show')
        if ( fullPhrase === correctlyPickedLetters ) {
            return true;
        } else {
            return false;
        }
    }
    removeLife () {
        missed += 1; 
        const livesRemaining = document.getElementsByClassName('tries').length();
        if (livesRemaining === 0) {
            gameOver();
        } 
    }
    gameOver(gameWon) {
        
    }
  }
