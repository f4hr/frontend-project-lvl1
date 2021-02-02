import startGameEngine from '../index.js';
import { getRandomIntInclusive, isEven } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundDataGenerator = () => {
  const number = getRandomIntInclusive(0, 100);
  const question = number;
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, roundDataGenerator);
};

export default startGame;
