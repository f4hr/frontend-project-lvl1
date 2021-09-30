import startGameEngine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const randomNumber = getRandomIntInclusive(2, 100);
  const question = `${randomNumber}`;

  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, generateRound);
};

export default startGame;
