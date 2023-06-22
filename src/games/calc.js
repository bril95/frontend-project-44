import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

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
  const operators = ['+', '-', '*'];
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const i = generateRandomNumber(0, 3);
  const question = `${firstNumber} ${operators[i]} ${secondNumber}`;
  const rightAnswer = calcFinishNumber(firstNumber, secondNumber, operators[i]);
  return [question, String(rightAnswer)];
};
export default () => startGame(gameRule, createRound);
