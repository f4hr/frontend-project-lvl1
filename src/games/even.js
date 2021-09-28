import startGameEngine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomIntInclusive = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const number = getRandomIntInclusive(0, 100);
  const question = number;
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, generateRound);
};

export default startGame;
