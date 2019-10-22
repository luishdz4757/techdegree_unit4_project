/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


class Game {
    //btn id btn_reset - add event listener
   // btn class keyrow - add event listener
   constructor () {
    this.missed = 0;
    this.phrase = [] ;
    this.activePhrase = 'null';
   }
   createPhrases () {
       new Phrase ('life is like a box of chocolates'),
       new Phrase ('there is no trying'),
       new Phrase ('may the force be with you'),
       new Phrase ('you have to see the matrix for yourself'),
       new Phrase ('you talking to me')
       phrases.push(createPhrases);
   }

 }

const phrase = new Phrase();
//console.log(`Phrase - phrase: ${phrase.phrase}`);

const game = new Game();

game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});