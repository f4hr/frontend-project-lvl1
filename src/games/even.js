import readlineSync from 'readline-sync';

const roundsCount = 3;

const generateQuestionAndAnswer = () => {
  const number = Math.round(Math.random() * 100);
  const question = `Question: ${number}`;
  const isEven = (number % 2 === 0);
  const correctAnswer = (isEven) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isWin = true;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();

    console.log(question);

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

export default startCalcGame;
