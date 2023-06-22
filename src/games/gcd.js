import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findCommonNumber = (random1, random2) => {
  let firstNumberRandom = random1;
  let secondNumberRandom = random2;
  while (firstNumberRandom !== secondNumberRandom) {
    if (firstNumberRandom > secondNumberRandom) {
      firstNumberRandom -= secondNumberRandom;
    } else {
      secondNumberRandom -= firstNumberRandom;
    }
  }
  return firstNumberRandom;
};

const createRound = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = findCommonNumber(firstNumber, secondNumber);
  return [question, String(rightAnswer)];
};

export default () => startGame(gameRule, createRound);
