import store from 'store';

export function calculateScore(remainingTime, streak) {
  return Math.round(10 * remainingTime / 1000 * (1 + (streak / 100)));
}

export function setHighScore(difficulty, score) {
  debugger;
  let scores = store.get('scores') || {};
  let levelScore = scores[difficulty] || 0;

  if (levelScore < score) {
    scores[difficulty] = score;
    store.set('scores', scores);
    return true;
  }

  return false;
}