/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


class Game {
   constructor () {
    this.missed = 0;
    this.phrase = this.createPhrases();
    this.activePhrase = null;
   }
   createPhrases(){
       const phrases = [
       new Phrase ('life is like a box of chocolates'), 
       new Phrase ('there is no trying'),
       new Phrase ('may the force be with you'),
       new Phrase ('you have to see the matrix for yourself'),
       new Phrase ('you talking to me')];
       return phrases;
   }
  // getRandomPhrase(){
   //    const randomNum = Math.floor(Math.random() * this.phrase.legnth)
  // }

 }
 const game = new Game();
 game.phrases.forEach((phrase, index) => {
 console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
