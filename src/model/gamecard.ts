export default class GameCard {
  
  difficulty: string;

  question: string;

  answer: string;

  choices: string[];

  constructor(difficulty: string, question: string, answer: string, choices: string[]) {
    this.difficulty = difficulty;
    this.question = question;
    this.answer = answer;
    this.choices = choices;
  }
  
}