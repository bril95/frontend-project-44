import startGame from '../index.js';
import { random100 } from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = (random) => {
  let rigthAnswer;
  if (random % 2 === 0) {
    rigthAnswer = 'yes';
  } else rigthAnswer = 'no';
  return rigthAnswer;
};

const checkEven = () => {
  const gamePart = () => {
    const randomNumber = random100();
    const question = `${randomNumber}`;
    const logic = gameLogic(randomNumber);
    return [question, logic];
  };
  startGame(gameRule, gamePart);
};

export default checkEven;
