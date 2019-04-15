import { unescape } from 'lodash';
import GameCard from './gamecard';

export default class Game {

  constructor(cards) {
    this._cards = cards;
  }

  get cards() {
    return this._cards;
  }

  static fromJSON(jsonData) {
      
    let results = jsonData.results,
        cards = [],
        game,
        i;

      for (i = 0; i < results.length; i++) {
        let card = new GameCard(
          results[i].difficulty,
          unescape(results[i].question),
          results[i].correct_answer,
          results[i].incorrect_answers.concat(results[i].correct_answer)
          );
        cards.push(card);
      }
          
      return new Game(cards);
  }
}