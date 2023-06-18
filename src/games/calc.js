import startGame from '../index.js';
import random from '../utils.js';

const gameRule = 'What is the result of the expression?';

const calcFinishNumber = (randomFirst, randomSecond, sign) => {
  switch (sign) {
    case '+':
      return randomFirst + randomSecond;
    case '-':
      return randomFirst - randomSecond;
    case '*':
      return randomFirst * randomSecond;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

const createRound = () => {
  const element = ['+', '-', '*'];
  const randomNumberFirst = random(0, 10);
  const randomNumberSecond = random(0, 10);
  const i = random(0, 3);
  const question = `${randomNumberFirst} ${element[i]} ${randomNumberSecond}`;
  const rightAnswer = calcFinishNumber(randomNumberFirst, randomNumberSecond, element[i]);
  return [question, String(rightAnswer)];
};
export default () => startGame(gameRule, createRound);
