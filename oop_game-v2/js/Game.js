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
//if clicked letter is in phrase then it shows a true and chosen       
        if (clickedLetter){
            this.activePhrase.showMatchedLetter(button.textContent);
            button.classList.add('chosen');
            button.disabled = 'true';
            this.checkForWin();
//if not in phrase it shows as wrong and you lose a life            
        } else if (!clickedLetter){
            button.classList.add('wrong');
            this.removeLife();
        }
        if (this.checkForWin()) {
            this.gameOver(true);
        }
    
}
   
//Checks if all characters in phrase have been revealed for win
    checkForWin (){
        const fullPhrase = document.querySelectorAll('.letter').length;
        const correctlyPickedLetters = document.querySelectorAll ('.show').length;
        if (fullPhrase === correctlyPickedLetters) {
            return true
        };
           
        
    };
    
//Removes lives and if you lose 5 lives the game ends    
    removeLife () {
        const livesRemaining = document.querySelectorAll('ol img');
        livesRemaining[this.missed].setAttribute('src','images/lostHeart.png');
        this.missed ++;
        if ( this.missed === 5 ) {
            this.gameOver(false);
        }
    };

//Shows message depending if user won or lost game    
    gameOver(gameWon) {
        if (gameWon === true ){
            document.getElementById("game-over-message").textContent = "Good Job! You Revealed The Phrase!";
            document.getElementById('overlay').className = 'win';
        } else if (gameWon === false){
            document.getElementById("game-over-message").textContent = "Sorry Better Luck Next Time.";
            document.getElementById('overlay').className = 'lose';
        }
        document.getElementById("overlay").style.display = "block";
        this.resetGame();
    }
  
 //Resets keys that were clicked, resets lives back to 5 for the next game   
    resetGame() {
        const phraseLis = document.getElementById('phraseCharacters');
        phraseLis.innerHTML = '';
        
        const oldGameButtons = document.getElementsByClassName('key');
        for (let i = 0; i < oldGameButtons.length; i++){
            oldGameButtons[i].disabled = false;
            oldGameButtons[i].className = 'key';
        }
        
        const resetLives = document.querySelectorAll('ol img');
            for (let i = 0; i < resetLives.length; i++){
            resetLives[i].src = 'images/liveHeart.png';
            }
    }
  }
