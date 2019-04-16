import { unescape } from 'lodash';
import GameCard from './gamecard';

export default class Game {

  cards: GameCard[]; 

  constructor(cards: GameCard[]) {
    this.cards = cards;
  }

  static fromJSON(jsonData): Game {
      
    let results = jsonData.results,
        cards = [];

      for (let i = 0; i < results.length; i++) {
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