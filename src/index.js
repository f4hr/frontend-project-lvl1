import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameLoop = (roundDataGenerator) => {
  let count = 0;
  while (count < roundsCount) {
    const [question, correctAnswer] = roundDataGenerator();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }

    console.log('Correct!');
    count += 1;
  }

  return (count === roundsCount) ? 'win' : 'lose';
};

const startGameEngine = (gameDescription, roundDataGenerator) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n${gameDescription}`);
  const result = gameLoop(roundDataGenerator);

  console.log((result === 'win') ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
};

export default startGameEngine;
