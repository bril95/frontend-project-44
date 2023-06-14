import startGame from '../index.js';
import { random100, isPrime } from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (rule) => {
  rule = gameRule;
  const gamePart = () => {
    const randomNumber = random100() + 2;
    const question = `${randomNumber}`;
    let rightAnswer = isPrime(randomNumber);
    if (rightAnswer === true) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';
    return [question, rightAnswer];
  };
  startGame(rule, gamePart);
};

export default prime;
