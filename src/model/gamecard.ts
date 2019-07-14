import DifficultyEnum from "./difficultyenum";

export default class GameCard {

  difficulty: DifficultyEnum;

  question: string;

  answer: string;

  choices: string[];

  constructor(difficulty: DifficultyEnum, question: string, answer: string, choices: string[]) {
    this.difficulty = difficulty;
    this.question = question;
    this.answer = answer;
    this.choices = choices;
  }
  
}