import mainPartOfApp from '../index.js';

const calc = () => {
  //  спрашивает имя
  const howToPlay = 'What is the result of the expression?';
  // цикл
  const gamePart = () => {
    const element = ['+', '-', '*'];
    const randomNumberFirst = Math.floor(Math.random() * 10);
    const randomNumberSecond = Math.floor(Math.random() * 10);
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
    return [question, rightAnswer];
  };
  mainPartOfApp(howToPlay, gamePart);
};

export default calc;
