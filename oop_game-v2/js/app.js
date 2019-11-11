/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
        this.phrase = phrase.toLowerCase();
     }
     addPhraseToDisplay() {
         //Targets the phrase
        const phraseElement = document.querySelector('#phrase ul');
        const splitPhrase = this.phrase.split('');
        splitPhrase.forEach( character => {
            const liElementChar = document.createElement('li');
            liElementChar.innerHTML = (`${character}`);
            phraseElement.append(liElementChar);
            liElementChar.classList.add('hide');
            if (character === ' ') {
                liElementChar.classList.add('space');
            } else {
                liElementChar.classList.add('letter');
            }
            
        });
        
     }
        checkLetter(letter){
            if (this.phrase.includes(letter)){
               return true;
           } else {
               return false;
           }
        }
        showMatchedLetter(letter) {
            const liElement = document.getElementsByClassName('letter');
            for (let i = 0; i < liElement.length; i++){
             if (liElement[i].textContent === letter) {
                    liElement[i].classList.remove('hide');
                    liElement[i].className = 'letter show';   
            }
        }
    }
    
 }

//  const game = new Game();
//  game.getRandomPhrase().addPhraseToDisplay();
