import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;

const createRound = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const question = `${randomNumber}`;
  let rightAnswer = isNumberEven(randomNumber);
  rightAnswer = rightAnswer ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => startGame(gameRule, createRound);
