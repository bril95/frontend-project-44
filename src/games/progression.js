import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const makeArray = (start, step) => {
  const array = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const elementProgression = start + i * step;
    array.push(elementProgression);
  }
  return array;
};

const createRound = () => {
  const startProgression = generateRandomNumber(0, 10);
  const stepProgression = generateRandomNumber(1, 10);
  const arr = makeArray(startProgression, stepProgression);
  const randomElement = generateRandomNumber(0, 10);
  const rightAnswer = arr[randomElement];
  arr[randomElement] = '..';
  const question = arr.join(' ');
  return [question, String(rightAnswer)];
};

export default () => startGame(gameRule, createRound);
