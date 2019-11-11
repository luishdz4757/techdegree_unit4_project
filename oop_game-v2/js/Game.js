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
        
        const clickedLetter = this.activePhrase.checkLetter(event.target.textContent);
       
        if (clickedLetter){
            this.activePhrase.showMatchedLetter(event.target.textContent);
            event.target.classList.add('chosen');
            event.target.disabled = 'true';
            this.checkForWin();
        } else if (!clickedLetter){
            event.target.classList.add('wrong');
            this.removeLife();
        }
    
}
    checkForWin (){
        const fullPhrase = document.querySelectorAll('li .letter').length;
        const correctlyPickedLetters = document.querySelectorAll ('li .show').length;
        if ( fullPhrase === correctlyPickedLetters) {
            return this.gameOver(true);
        } else {
            return false;
        }
    };
    removeLife () {
        
        const livesRemaining = document.querySelectorAll('ol img');
        livesRemaining[this.missed].setAttribute('src','images/lostHeart.png');
        this.missed ++;
        if ( this.missed >= 5 ) {
            return this.gameOver(false);
        }
    };
    gameOver(gameWon) {
        if (gameWon){
            document.getElementById("game-over-message").value = "Good Job! You Revealed The Phrase!";

        } else if (!gameWon){
            document.getElementById("game-over-message").value = "Sorry Better Luck Next Time.";
        }
    }
  }
