import startGameEngine from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const missingNumberReplacement = '..';
const delimiter = ' ';

const generateProgression = (startNumber, commonDifference, progressionLength) => {
  const progression = [];
  let currentNumber = startNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(currentNumber);
    currentNumber += commonDifference;
  }

  return progression;
};

const generateRound = () => {
  const startNumber = getRandomIntInclusive(1, 10);
  const commonDifference = getRandomIntInclusive(1, 10);
  const progressionLength = getRandomIntInclusive(5, 10);
  const missingNumberIndex = getRandomIntInclusive(0, progressionLength - 1);
  const progression = generateProgression(startNumber, commonDifference, progressionLength);
  const correctAnswer = `${progression[missingNumberIndex]}`;

  progression[missingNumberIndex] = missingNumberReplacement;

  const question = progression.join(delimiter);

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, generateRound);
};

export default startGame;
