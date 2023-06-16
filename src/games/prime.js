import startGame from '../index.js';
import { random, isPrime } from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = (number) => {
  let rightAnswer = isPrime(number);
  if (rightAnswer === true) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';
  return rightAnswer;
};

const prime = () => {
  const gamePart = () => {
    const randomNumber = random(100) + 2;
    const question = `${randomNumber}`;
    const logic = gameLogic(randomNumber);
    return [question, logic];
  };
  startGame(gameRule, gamePart);
};

export default prime;
