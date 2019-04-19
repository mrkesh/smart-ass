export function calculateScore(remainingTime, streak) {
  return Math.round(10 * remainingTime / 1000 * (1 + (streak / 100)));
}