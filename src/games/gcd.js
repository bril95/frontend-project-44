import startGame from '../index.js';
import random from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findCommonNumber = (random1, random2) => {
  let randomFirst = random1;
  let randomSecond = random2;
  while (randomFirst !== randomSecond) {
    if (randomFirst > randomSecond) {
      randomFirst -= randomSecond;
    } else {
      randomSecond -= randomFirst;
    }
  }
  return randomFirst;
};

const gcd = () => {
  const gamePart = () => {
    const randomNumberFirst = random(100);
    const randomNumberSecond = random(100);
    const question = `${randomNumberFirst} ${randomNumberSecond}`;
    const rightAnswer = findCommonNumber(randomNumberFirst, randomNumberSecond);
    return [question, String(rightAnswer)];
  };
  startGame(gameRule, gamePart);
};

export default gcd;
