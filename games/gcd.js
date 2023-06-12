import mainPartOfApp from '../src/index.js';

const gcd = () => {
  //  спрашивает имя
  const howToPlay = 'Find the greatest common divisor of given numbers.';
  // цикл
  const gamePart = () => {
    let randomNumberFirst = Math.floor(Math.random() * 100);
    let randomNumberSecond = Math.floor(Math.random() * 100);
    const question = `Question: ${randomNumberFirst} ${randomNumberSecond}`;
    // проверяем какой правильный ответ на самом деле
    while (randomNumberFirst !== randomNumberSecond) {
      if (randomNumberFirst > randomNumberSecond) {
        randomNumberFirst -= randomNumberSecond;
      } else {
        randomNumberSecond -= randomNumberFirst;
      }
    }
    const rightAnswer = randomNumberFirst;
    // проверяем ответ игрока с правильным
    return [question, rightAnswer];
  };
  mainPartOfApp(howToPlay, gamePart);
};

export default gcd;