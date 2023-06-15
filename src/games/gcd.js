import startGame from '../index.js';
import { random100 } from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gameLogic = (random1, random2) => {
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
    const randomNumberFirst = random100();
    const randomNumberSecond = random100();
    const question = `${randomNumberFirst} ${randomNumberSecond}`;
    const rightAnswer = gameLogic(randomNumberFirst, randomNumberSecond);
    return [question, String(rightAnswer)];
  };
  startGame(gameRule, gamePart);
};

export default gcd;
