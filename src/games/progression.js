import startGame from '../index.js';
import { random10 } from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const progression = (rule) => {
  rule = gameRule;
  const gamePart = () => {
    const startProgression = random10();
    let arr = [startProgression];
    const stepProgression = random10() + 1;
    let nextElement = startProgression + stepProgression;
    arr.push(nextElement);
    for (let i = 0; i < 8; i += 1) {
      nextElement += stepProgression;
      arr.push(nextElement);
    }
    const randomElement = random10();
    const rightAnswer = arr[randomElement];
    arr[randomElement] = '..';
    arr = arr.join(' ');
    const question = `${arr}`;
    return [question, String(rightAnswer)];
  };
  startGame(rule, gamePart);
};

export default progression;
