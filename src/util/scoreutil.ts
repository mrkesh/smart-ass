import store from 'store';
import DifficultyEnum from '../model/difficultyenum';

export function calculateScore(remainingTime: number, streak: number): number {
  return Math.round(10 * remainingTime / 1000 * (1 + (streak / 100)));
}

export function setHighScore(difficulty: DifficultyEnum, score: number): boolean {
  
  let scores: { [key: string] : number } = store.get('scores') || {};
  let levelScore: number = scores[difficulty] || 0;

  if (levelScore < score) {
    scores[difficulty] = score;
    store.set('scores', scores);
    return true;
  }

  return false;
}