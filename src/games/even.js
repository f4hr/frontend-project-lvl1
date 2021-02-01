import { roundsCount, startGame } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => {
  const number = Math.round(Math.random() * 100);
  const question = number;
  const isEven = (number % 2 === 0);
  const correctAnswer = (isEven) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => {
  const gameData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateRoundData());
  }

  startGame(gameDescription, gameData);
};

export default startEvenGame;
