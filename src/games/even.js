import startGameEngine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundDataGenerator = () => {
  const number = Math.round(Math.random() * 100);
  const question = number;
  const isEven = (number % 2 === 0);
  const correctAnswer = (isEven) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, roundDataGenerator);
};

export default startGame;
