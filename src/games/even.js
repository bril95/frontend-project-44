import startGame from '../index.js';
import random from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } return false;
};

const checkEven = () => {
  const gamePart = () => {
    const randomNumber = random(100);
    const question = `${randomNumber}`;
    let rightAnswer = isNumberEven(randomNumber);
    rightAnswer = rightAnswer ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  startGame(gameRule, gamePart);
};

export default checkEven;
