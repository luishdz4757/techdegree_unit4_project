/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
     this.missed = 0;
     this.phrase = this.createPhrases();
     this.activePhrase = null;
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
        console.log(randomNum);
        return game.phrase[randomNum];
    }
    startGame() {
        const idOverlay = document.getElementById('overlay');
        idOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase() ;
        this.activePhrase.addPhraseToDisplay();
       
    }

    handleInteraction(button){
        
        const clickedLetter = this.activePhrase.checkLetter(button.textContent);
       
        if (clickedLetter){
            this.activePhrase.showMatchedLetter(button.textContent);
            button.classList.add('chosen');
            button.disabled = 'true';
            this.checkForWin();
        } else if (!clickedLetter){
            button.classList.add('wrong');
            this.removeLife();
        }
        if (this.checkForWin()) {
            this.gameOver(true);
        }
    
}
    checkForWin (){
        const fullPhrase = document.querySelectorAll('.letter').length;
        const correctlyPickedLetters = document.querySelectorAll ('.show').length;
        if (fullPhrase === correctlyPickedLetters) {
            return true
        };
           
        
    };
    removeLife () {
        
        const livesRemaining = document.querySelectorAll('ol img');
        livesRemaining[this.missed].setAttribute('src','images/lostHeart.png');
        this.missed ++;
        if ( this.missed === 5 ) {
            this.gameOver(false);
        }
    };
    gameOver(gameWon) {
        if (gameWon === true ){
            document.getElementById("game-over-message").textContent = "Good Job! You Revealed The Phrase!";

        } else if (gameWon === false){
            document.getElementById("game-over-message").textContent = "Sorry Better Luck Next Time.";
        }
    }
  }
