import mainPartOfApp from '../src/index.js';

const checkEven = () => {
  const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gamePart = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const question = `${randomNumber}`;
    let rigthAnswer;
    if (randomNumber % 2 === 0) {
      rigthAnswer = 'yes';
    } else rigthAnswer = 'no';
    return [question, rigthAnswer];
  };
  mainPartOfApp(howToPlay, gamePart);
};

export default checkEven;
