import readlineSync from 'readline-sync';

const welcomeGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
const countOfRound = 3;

export { greeting, welcomeGreeting, countOfRound };
