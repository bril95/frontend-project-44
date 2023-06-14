import startGame from '../index.js';
import { random100 } from '../utils.js';

const checkEven = () => {
  const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gamePart = () => {
    const randomNumber = random100();
    const question = `${randomNumber}`;
    let rigthAnswer;
    if (randomNumber % 2 === 0) {
      rigthAnswer = 'yes';
    } else rigthAnswer = 'no';
    return [question, rigthAnswer];
  };
  startGame(howToPlay, gamePart);
};

export default checkEven;
