import { roundsCount, startGame } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomIntInclusive = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin + 1)) + roundMin;
};

const getExpressionResult = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const generateRoundData = () => {
  const operand1 = getRandomIntInclusive(1, 50);
  const operand2 = getRandomIntInclusive(1, 50);
  const operator = operators[getRandomIntInclusive(0, operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;

  const correctAnswer = `${getExpressionResult(operand1, operand2, operator)}`;

  return [question, correctAnswer];
};

const startCalcGame = () => {
  const gameData = [];

  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateRoundData());
  }

  startGame(gameDescription, gameData);
};

export default startCalcGame;
