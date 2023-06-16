import startGame from '../index.js';
import random from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const makeProgression = () => {
  const startProgression = random(10);
  const array = [startProgression];
  const stepProgression = random(1, 10);
  let nextElement = startProgression + stepProgression;
  array.push(nextElement);
  for (let i = 0; i < 8; i += 1) {
    nextElement += stepProgression;
    array.push(nextElement);
  }
  return array;
};

const progression = () => {
  const gamePart = () => {
    let arr = makeProgression();
    const randomElement = random(10);
    const rightAnswer = arr[randomElement];
    arr[randomElement] = '..';
    arr = arr.join(' ');
    const question = `${arr}`;
    return [question, String(rightAnswer)];
  };
  startGame(gameRule, gamePart);
};

export default progression;
