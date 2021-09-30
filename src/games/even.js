import startGameEngine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

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
