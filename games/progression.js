import mainPartOfApp from '../src/index.js';

const progression = () => {
  //  спрашивает имя
  const howToPlay = 'What number is missing in the progression?';
  // цикл
  const gamePart = () => {
    const startProgression = Math.floor(Math.random() * 10);
    const arr = [startProgression];
    const stepProgression = Math.floor(Math.random() * 10) + 1;
    let nextElement = startProgression + stepProgression;
    arr.push(nextElement);
    for (let i = 0; i < 8; i += 1) {
      nextElement += stepProgression;
      arr.push(nextElement);
    }
    const randomElement = Math.floor(Math.random() * 10);
    const rightAnswer = arr[randomElement];
    arr[randomElement] = '..';
    const question = `${arr}`;
    return [question, rightAnswer];
  };
  mainPartOfApp(howToPlay, gamePart);
};

export default progression;