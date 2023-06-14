import startGame from '../index.js';
import { random100 } from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (rule) => {
  rule = gameRule;
  const gamePart = () => {
    let randomNumberFirst = random100();
    let randomNumberSecond = random100();
    const question = `${randomNumberFirst} ${randomNumberSecond}`;
    while (randomNumberFirst !== randomNumberSecond) {
      if (randomNumberFirst > randomNumberSecond) {
        randomNumberFirst -= randomNumberSecond;
      } else {
        randomNumberSecond -= randomNumberFirst;
      }
    }
    const rightAnswer = randomNumberFirst;
    return [question, String(rightAnswer)];
  };
  startGame(rule, gamePart);
};

export default gcd;
