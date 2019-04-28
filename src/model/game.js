import { shuffle } from 'lodash';
import { decode } from 'he';
import GameCard from './gamecard';

const NUMBER_OF_QUESTIONS = 15;

export default class Game {

  constructor(cards) {
    this.cards = cards;
  }

  static fromJSON(jsonData) {
      
    let results = shuffle(jsonData.results).slice(NUMBER_OF_QUESTIONS),
        cards = [],
        game,
        i;

      for (i = 0; i < results.length; i++) {
        let card = new GameCard(
          results[i].difficulty,
          decode(results[i].question),
          decode(results[i].correct_answer),
          results[i].incorrect_answers.concat(results[i].correct_answer).map((answer => {
            return decode(answer);
          }))
          );
        cards.push(card);
      }
          
      return new Game(cards);
  }
}