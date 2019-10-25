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
        const splitPhrase = phrase.split('');
        splitPhrase.forEach(function (character) {
            const liElementChar = document.createElement('li');
            phraseElement.append(LiElementChar);
            liElementChar.classList.add('hide');
            if (character === ' ') {
                liElementChar.classList.add('space');
            } else {
                liElementChar.classList.add('letter');
            }
        });
     }
 }

 const game = new Game();
 game.getRandomPhrase().addPhraseToDisplay();
