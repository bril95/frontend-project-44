import readlineSync from 'readline-sync';

const mainPartOfApp = (howToPlay, gamePart) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(howToPlay);
  for (let i = 0; i < 3; i += 1) {
    const game = gamePart();
    console.log('Question:', game[0]);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = String(game[1]);
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default mainPartOfApp;
