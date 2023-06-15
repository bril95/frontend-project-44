import startGame from '../index.js';
import { random100, isPrime } from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = (random) => {
  let rightAnswer = isPrime(random);
  if (rightAnswer === true) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';
  return rightAnswer;
};

const prime = (rule) => {
  rule = gameRule;
  const gamePart = () => {
    const randomNumber = random100() + 2;
    const question = `${randomNumber}`;
    const logic = gameLogic(randomNumber);
    return [question, logic];
  };
  startGame(rule, gamePart);
};

export default prime;
