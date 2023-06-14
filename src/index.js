import readlineSync from 'readline-sync';

const startGame = (gameRule, gamePart) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  const countOfRound = 3;
  for (let i = 0; i < countOfRound; i += 1) {
    const [const1, const2] = gamePart();
    console.log(`Question: ${const1}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = const2;
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
