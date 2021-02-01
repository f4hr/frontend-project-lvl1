import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (rules, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  let isWin = true;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = questionsAndAnswers[i];

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      isWin = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }

  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export { roundsCount, startGame };
