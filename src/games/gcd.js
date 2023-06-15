import startGame from '../index.js';
import { random100 } from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gameLogic = (randomFirst, randomSecond) => {
  while (randomFirst !== randomSecond) {
    if (randomFirst > randomSecond) {
      randomFirst -= randomSecond;
    } else {
      randomSecond -= randomFirst;
    }
  }
  return randomFirst;
};

const gcd = (rule) => {
  rule = gameRule;
  const gamePart = () => {
    const randomNumberFirst = random100();
    const randomNumberSecond = random100();
    const question = `${randomNumberFirst} ${randomNumberSecond}`;
    const rightAnswer = gameLogic(randomNumberFirst, randomNumberSecond);
    return [question, String(rightAnswer)];
  };
  startGame(rule, gamePart);
};

export default gcd;
