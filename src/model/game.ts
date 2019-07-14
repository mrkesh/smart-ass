import { shuffle } from 'lodash';
import { decode } from 'he';
import GameCard from './gamecard';
import DifficultyEnum from './difficultyenum';

const NUMBER_OF_QUESTIONS = 5;

interface GameCardJSON {
  category: string,
  type?: string,
  difficulty: DifficultyEnum;
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

interface GameJSON {
  results: GameCardJSON[];
}

export default class Game {

  cards: GameCard[];

  difficulty: DifficultyEnum

  constructor(cards: GameCard[], difficulty: DifficultyEnum) {
    this.cards = cards;
    this.difficulty = difficulty;
  }

  static fromJSON(jsonData: GameJSON) {
      
    let results = shuffle(jsonData.results).slice(0, NUMBER_OF_QUESTIONS),
        cards: GameCard[] = [],
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