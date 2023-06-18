import startGame from '../index.js';
import random from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

const createRound = () => {
  const randomNumber = random(0, 100);
  const question = `${randomNumber}`;
  let rightAnswer = isPrime(randomNumber);
  rightAnswer = rightAnswer ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => startGame(gameRule, createRound);
