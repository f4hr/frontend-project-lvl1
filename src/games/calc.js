import startGameEngine from '../index.js';
import { getRandomIntInclusive } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getExpressionResult = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator "${operator}"`);
  }
};

const generateRound = () => {
  const operand1 = getRandomIntInclusive(1, 50);
  const operand2 = getRandomIntInclusive(1, 50);
  const operator = operators[getRandomIntInclusive(0, operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;

  const correctAnswer = `${getExpressionResult(operand1, operand2, operator)}`;

  return [question, correctAnswer];
};

const startGame = () => {
  startGameEngine(gameDescription, generateRound);
};

export default startGame;
