import startGame from '../index.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const prime = () => {
  //  спрашивает имя
  const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  // цикл
  const gamePart = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 2;
    const question = `${randomNumber}`;
    let rightAnswer = isPrime(randomNumber);
    if (rightAnswer === true) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';
    return [question, rightAnswer];
  };
  startGame(howToPlay, gamePart);
};

export default prime;
