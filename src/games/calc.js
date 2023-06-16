import startGame from '../index.js';
import random from '../utils.js';

const gameRule = 'What is the result of the expression?';

const calcFinishNumber = (randomFirst, randomSecond, sign) => {
  let answer;
  switch (sign) {
    case '+':
      answer = randomFirst + randomSecond;
      break;
    case '-':
      answer = randomFirst - randomSecond;
      break;
    default:
      answer = randomFirst * randomSecond;
  }
  return String(answer);
};

const calc = () => {
  const gamePart = () => {
    const element = ['+', '-', '*'];
    const randomNumberFirst = random(0, 10);
    const randomNumberSecond = random(0, 10);
    const i = random(0, 3);
    const question = `${randomNumberFirst} ${element[i]} ${randomNumberSecond}`;
    const rightAnswer = calcFinishNumber(randomNumberFirst, randomNumberSecond, element[i]);
    return [question, rightAnswer];
  };
  startGame(gameRule, gamePart);
};

export default calc;
