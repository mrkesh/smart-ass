export async function loadQuestions(difficulty) {

  const url =`https://opentdb.com/api.php?amount=20&category=9&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(url);
  const json = await response.json();

  return json;
}