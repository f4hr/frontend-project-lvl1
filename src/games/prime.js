import startGameEngine from '../index.js';
import { getRandomIntInclusive, isPrime } from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const roundDataGenerator = () => {
  const randomNumber = getRandomIntInclusive(2, 100);
  const question = `${randomNumber}`;

  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, roundDataGenerator);
};

export default startGame;
