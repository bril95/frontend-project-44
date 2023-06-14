import startGame from '../index.js';
import { random10 } from '../utils.js';

const calc = () => {
  //  спрашивает имя
  const howToPlay = 'What is the result of the expression?';
  // цикл
  const gamePart = () => {
    const element = ['+', '-', '*'];
    const randomNumberFirst = random10();
    const randomNumberSecond = random10();
    const k = Math.floor(Math.random() * 3);
    const question = `${randomNumberFirst} ${element[k]} ${randomNumberSecond}`;
    // проверяем какой правильный ответ на самом деле
    let rightAnswer;
    if (element[k] === '+') {
      rightAnswer = randomNumberFirst + randomNumberSecond;
    } else if (element[k] === '-') {
      rightAnswer = randomNumberFirst - randomNumberSecond;
    } else if (element[k] === '*') {
      rightAnswer = randomNumberFirst * randomNumberSecond;
    }
    // проверяем ответ игрока с правильным
    return [question, String(rightAnswer)];
  };
  startGame(howToPlay, gamePart);
};

export default calc;
