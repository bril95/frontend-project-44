import startGame from '../index.js';
import { random10 } from '../utils.js';

const gameRule = 'What is the result of the expression?';

const calc = (rule) => {
  rule = gameRule;
  const gamePart = () => {
    const element = ['+', '-', '*'];
    const randomNumberFirst = random10();
    const randomNumberSecond = random10();
    const k = Math.floor(Math.random() * 3);
    const question = `${randomNumberFirst} ${element[k]} ${randomNumberSecond}`;
    let rightAnswer;
    if (element[k] === '+') {
      rightAnswer = randomNumberFirst + randomNumberSecond;
    } else if (element[k] === '-') {
      rightAnswer = randomNumberFirst - randomNumberSecond;
    } else if (element[k] === '*') {
      rightAnswer = randomNumberFirst * randomNumberSecond;
    }
    return [question, String(rightAnswer)];
  };
  startGame(rule, gamePart);
};

export default calc;
