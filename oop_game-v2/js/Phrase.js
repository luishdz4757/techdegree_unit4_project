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

            if (this.checkLetter(letter) === true) {
                for (let i=0; i <liElement.length; i++){
                    
                        //liElement[i].classList.remove('hide');
                        liElement[i].classList.add('show');
                    
                }
                }
            }
    
 }

//  const game = new Game();
//  game.getRandomPhrase().addPhraseToDisplay();
