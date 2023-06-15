import startGame from '../index.js';
import { random10 } from '../utils.js';

const gameRule = 'What is the result of the expression?';

const gameLogic = (randomFirst, randomSecond, sign) => {
  let answer;
  if (sign === '+') {
    answer = randomFirst + randomSecond;
  } else if (sign === '-') {
    answer = randomFirst - randomSecond;
  } else if (sign === '*') {
    answer = randomFirst * randomSecond;
  }
  return String(answer);
};

const calc = (rule) => {
  rule = gameRule;
  const gamePart = () => {
    const element = ['+', '-', '*'];
    const randomNumberFirst = random10();
    const randomNumberSecond = random10();
    const k = Math.floor(Math.random() * 3);
    const question = `${randomNumberFirst} ${element[k]} ${randomNumberSecond}`;
    const rightAnswer = gameLogic(randomNumberFirst, randomNumberSecond, element[k]);
    return [question, rightAnswer];
  };
  startGame(rule, gamePart);
};

export default calc;
