import startGame from '../index.js';
import random from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

const prime = () => {
  const gamePart = () => {
    const randomNumber = random(2, 100);
    const question = `${randomNumber}`;
    let rightAnswer = isPrime(randomNumber);
    rightAnswer = rightAnswer ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  startGame(gameRule, gamePart);
};

export default prime;
