import readlineSync from 'readline-sync';

const checkEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let rigthAnswer;
  let randomNumber;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    let answer = readlineSync.question('Your answer: ');
    answer = answer.toLowerCase();
    if (randomNumber % 2 === 0) { // проверяем какой правильный ответ на самом деле
      rigthAnswer = 'yes';
    } else rigthAnswer = 'no';
    if (answer === rigthAnswer) { // проверяем ответ игрока с правильным
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer. Correct answer was ${rigthAnswer}\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default checkEven;
