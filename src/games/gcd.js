import startGameEngine from '../index.js';
import { getRandomIntInclusive, gcd } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const roundDataGenerator = () => {
  const num1 = getRandomIntInclusive(1, 50);
  const num2 = getRandomIntInclusive(1, 50);
  const question = `${num1} ${num2}`;

  const correctAnswer = `${gcd(num1, num2)}`;

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, roundDataGenerator);
};

export default startGame;
