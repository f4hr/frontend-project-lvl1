import startGameEngine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num1 % num2) {
    return gcd(num2, num1 % num2);
  }

  return Math.abs(num2);
};

const generateRound = () => {
  const num1 = getRandomIntInclusive(1, 50);
  const num2 = getRandomIntInclusive(1, 50);
  const question = `${num1} ${num2}`;

  const correctAnswer = `${gcd(num1, num2)}`;

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, generateRound);
};

export default startGame;
