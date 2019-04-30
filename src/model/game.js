import { shuffle } from 'lodash';
import { decode } from 'he';
import GameCard from './gamecard';

const NUMBER_OF_QUESTIONS = 5;

export default class Game {

  constructor(cards, difficulty) {
    this.cards = cards;
    this.difficulty = difficulty;
  }

  static fromJSON(jsonData) {
      
    let results = shuffle(jsonData.results).slice(0, NUMBER_OF_QUESTIONS),
        cards = [],
        i;

    for (i = 0; i < results.length; i++) {
      let card = new GameCard(
        results[i].difficulty,
        decode(results[i].question),
        decode(results[i].correct_answer),
        results[i].incorrect_answers.concat(results[i].correct_answer).map((answer) => {
          return decode(answer);
        })
      );
    
      cards.push(card);
    }
          
    return new Game(cards, results[0].difficulty);
  }
}