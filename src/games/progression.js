import startGame from '../index.js';
import random from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const lengthProgression = 10;

const makeArray = (start, step) => {
  const array = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    const elementProgression = start + i * step;
    array.push(elementProgression);
  }
  return array;
};

const createRound = () => {
  const startProgression = random(0, 10);
  const stepProgression = random(1, 10);
  let arr = makeArray(startProgression, stepProgression);
  const randomElement = random(0, 10);
  const rightAnswer = arr[randomElement];
  arr[randomElement] = '..';
  arr = arr.join(' ');
  const question = `${arr}`;
  return [question, String(rightAnswer)];
};

export default () => startGame(gameRule, createRound);
