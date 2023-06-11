import readlineSync from 'readline-sync';
import { greeting, countOfRound } from 

const calc = () => {
  let randomNumberFirst;
  let randomNumberSecond;
  let rigthAnswer;
  let k;
  let answer;
  for (let i = 0; i < 3; i += 1) {
    const element = ['+', '-', '*'];
    randomNumberFirst = Math.floor(Math.random() * 100);
    randomNumberSecond = Math.floor(Math.random() * 100);
    k = Math.floor(Math.random() * 3);
    // как -то сделать выбор знака между числами
    console.log(`Question: ${randomNumberFirst} ${element[k]} ${randomNumberSecond}`);
    answer = readlineSync.question('Your answer: ');
    answer = Number(answer);
    // проверяем какой правильный ответ на самом деле
    if (element[k] === '+') {
      rigthAnswer = randomNumberFirst + randomNumberSecond;
    } else if (element[k] === '-') {
      rigthAnswer = randomNumberFirst - randomNumberSecond;
    } else rigthAnswer = randomNumberFirst * randomNumberSecond;
    // проверяем ответ игрока с правильным
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer. Correct answer was ${rigthAnswer}\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
